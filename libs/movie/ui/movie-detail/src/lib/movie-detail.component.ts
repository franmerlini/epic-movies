import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

import { SafePipe, ToEmbedPipe } from '@epic-movies/libs/movie/utils';
import { Movie } from '@epic-movies/libs/shared/data-access/models';

@Component({
  selector: 'lib-movie-detail',
  standalone: true,
  imports: [SafePipe, ToEmbedPipe],
  templateUrl: './movie-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent implements OnChanges {
  @Input({ required: true }) movie!: Movie;

  imageUrl!: string;

  ngOnChanges(): void {
    if (this.movie?.image) {
      this.imageUrl = `../../../../../../../../assets/images/${this.movie.image}.png`;
    }
  }
}
