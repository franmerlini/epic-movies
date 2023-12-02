import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-movies-ui-movie-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<p>movies-ui-movie-detail works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesUiMovieDetailComponent {}
