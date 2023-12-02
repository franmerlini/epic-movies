import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

import { Movie } from '@epic-movies/libs/shared/data-access/models';

@Component({
  selector: 'lib-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent implements OnChanges {
  @Input({ required: true }) movie: Movie | undefined | null;

  imageUrl: string | undefined;

  ngOnChanges(): void {
    if (this.movie?.image) {
      this.imageUrl = `../../../../../../../../assets/images/${this.movie.image}.png`;
    }
  }
}
