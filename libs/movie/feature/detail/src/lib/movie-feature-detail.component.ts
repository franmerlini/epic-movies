import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-movie-feature-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<p>movie-feature-detail works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieFeatureDetailComponent {}
