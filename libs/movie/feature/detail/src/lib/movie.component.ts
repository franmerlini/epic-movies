import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Store } from '@ngrx/store';

import { MoviesFeature } from '@epic-movies/libs/home/data-access';
import { MovieDetailComponent } from '@epic-movies/libs/movie/ui/movie-detail';

@Component({
  selector: 'lib-movie',
  standalone: true,
  imports: [MovieDetailComponent, AsyncPipe],
  template: `<lib-movie-detail [movie]="movie$ | async" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent {
  private readonly store = inject(Store);

  movie$ = this.store.select(MoviesFeature.selectSelectedMovie);
}
