import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

import { Store } from '@ngrx/store';

import { RouterLink } from '@angular/router';
import { MoviesFeature, MoviesPageActions } from '@epic-movies/libs/home/data-access';
import { MovieCardComponent } from '@epic-movies/libs/home/ui/movie-card';
import { Movie } from '@epic-movies/libs/shared/data-access/models';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [MovieCardComponent, NgFor, AsyncPipe, RouterLink],
  template: `
    <div class="p-4">
      <h1 class="text-2xl mb-2">Trending</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <lib-movie-card *ngFor="let movie of movies$ | async; trackBy: identify" [movie]="movie" [routerLink]="['/movies', movie.id]" />
      </div>
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
}
