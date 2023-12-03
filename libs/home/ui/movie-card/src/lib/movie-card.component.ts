import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Movie } from '@epic-movies/libs/shared/data-access/models';

@Component({
  selector: 'lib-movie-card',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './movie-card.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent implements OnChanges {
  @Input({ required: true }) movie!: Movie;
  @Input() isOnWatchlist!: boolean;

  @Output() addToWatchlist = new EventEmitter<Movie>();
  @Output() removeFromWatchlist = new EventEmitter<number>();

  imageUrl!: string;
  year!: number;

  ngOnChanges(): void {
    if (this.movie?.image) {
      this.imageUrl = `../../../../../../../../assets/images/${this.movie.image}.png`;
    }

    if (this.movie?.releasedDate) {
      this.year = new Date(this.movie.releasedDate).getFullYear();
    }
  }

  add(event: Event): void {
    event.stopPropagation();
    this.addToWatchlist.emit(this.movie);
  }

  remove(event: Event): void {
    event.stopPropagation();
    this.removeFromWatchlist.emit(this.movie.id);
  }
}
