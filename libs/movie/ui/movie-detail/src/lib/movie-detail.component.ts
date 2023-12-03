import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { SafePipe, ToEmbedPipe } from '@epic-movies/libs/movie/utils';
import { Movie } from '@epic-movies/libs/shared/data-access/models';

@Component({
  selector: 'lib-movie-detail',
  standalone: true,
  imports: [SafePipe, ToEmbedPipe, NgIf],
  templateUrl: './movie-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent implements OnChanges {
  @Input({ required: true }) movie!: Movie;

  @Output() addToWatchlist = new EventEmitter<Movie>();

  imageUrl!: string;
  inWatchlist = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movie']?.currentValue?.image) {
      this.imageUrl = `../../../../../../../../assets/images/${changes['movie'].currentValue.image}.png`;
    }
  }

  onClick(): void {
    this.addToWatchlist.emit(this.movie);
  }
}
