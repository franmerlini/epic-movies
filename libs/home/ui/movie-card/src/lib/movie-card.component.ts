import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
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

  imageSrc: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movie']?.currentValue) {
      this.imageSrc = `../../../../../../../../assets/images/${this.movie?.image}.png`;
    }
  }
}
