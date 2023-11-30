import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {}
