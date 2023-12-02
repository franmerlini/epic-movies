import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-movie-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<p>movies-ui-movie-detail works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent {}
