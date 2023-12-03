import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { MoviesFeature, MoviesPageActions } from '@epic-movies/libs/home/data-access';
import { ActionsBarComponent } from '@epic-movies/libs/home/ui/actions-bar';
import { MovieCardComponent } from '@epic-movies/libs/home/ui/movie-card';
import { Movie } from '@epic-movies/libs/shared/data-access/models';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [MovieCardComponent, NgFor, AsyncPipe, ActionsBarComponent],
  template: `
    <div class="p-4 flex flex-col gap-4">
      <lib-actions-bar (selectSortBy)="onSelectSortBy($event)" />

      <section>
        <h1 class="text-2xl mb-2">Trending</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          <lib-movie-card
            *ngFor="let movie of movies$ | async; trackBy: identify"
            [movie]="movie"
            (addToWatchlist)="onAddToWatchlist($event)"
            (removeFromWatchlist)="onRemoveFromWatchlist($event)"
          />
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly store = inject(Store);

  movies$ = this.store.select(MoviesFeature.selectAll);

  ngOnInit(): void {
    this.store.dispatch(MoviesPageActions.init());
  }

  identify(_: number, movie: Movie): number {
    return movie.id;
  }

  onAddToWatchlist(movie: Movie): void {
    this.store.dispatch(MoviesPageActions.addToWatchlist(movie));
  }

  onRemoveFromWatchlist(movieId: number): void {
    this.store.dispatch(MoviesPageActions.removeFromWatchlist(movieId));
  }

  onSelectSortBy(sortBy: number): void {
    switch (sortBy) {
      case 1:
        this.movies$ = this.store.select(MoviesFeature.selectMoviesOrderedByTitleAsc) as Observable<Movie[]>;
        break;
      case 2:
        this.movies$ = this.store.select(MoviesFeature.selectMoviesOrderedByTitleDesc) as Observable<Movie[]>;
        break;
      case 3:
        this.movies$ = this.store.select(MoviesFeature.selectMoviesOrderedByGenreAsc) as Observable<Movie[]>;
        break;
      case 4:
        this.movies$ = this.store.select(MoviesFeature.selectMoviesOrderedByGenreDesc) as Observable<Movie[]>;
        break;
      default:
        this.movies$ = this.store.select(MoviesFeature.selectAll);
        break;
    }
  }
}
