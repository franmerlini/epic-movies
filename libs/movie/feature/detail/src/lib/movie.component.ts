import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Store } from '@ngrx/store';

import { MoviesFeature, MoviesPageActions } from '@epic-movies/libs/home/data-access';
import { MovieDetailComponent } from '@epic-movies/libs/movie/ui/movie-detail';
import { Movie } from '@epic-movies/libs/shared/data-access/models';

@Component({
  selector: 'lib-movie',
  standalone: true,
  imports: [MovieDetailComponent, NgIf, AsyncPipe],
  template: `
    <div class="container mx-auto p-8">
      <ng-container *ngIf="movie$ | async as movie">
        <lib-movie-detail
          [movie]="movie"
          (addToWatchlist)="onAddToWatchList($event)"
          (removeFromWatchlist)="onRemoveFromWatchlist($event)"
        />
      </ng-container>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent {
  private readonly store = inject(Store);

  movie$ = this.store.select(MoviesFeature.selectSelectedMovie);

  onAddToWatchList(movie: Movie): void {
    this.store.dispatch(MoviesPageActions.addToWatchlist(movie));
  }

  onRemoveFromWatchlist(movieId: number): void {
    this.store.dispatch(MoviesPageActions.removeFromWatchlist(movieId));
  }
}
