import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';

import { Movie } from '@epic-movies/libs/shared/data-access/models';

@Component({
  selector: 'lib-movie-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './movie-card.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent implements OnChanges {
  @Input({ required: true }) movie: Movie | undefined;
  @Input() isOnWatchlist: boolean | undefined;

  imageUrl: string | undefined;
  year: number | undefined;

  ngOnChanges(): void {
    if (this.movie?.image) {
      this.imageUrl = `../../../../../../../../assets/images/${this.movie.image}.png`;
    }

    if (this.movie?.releasedDate) {
      this.year = new Date(this.movie.releasedDate).getFullYear();
    }
  }
}
