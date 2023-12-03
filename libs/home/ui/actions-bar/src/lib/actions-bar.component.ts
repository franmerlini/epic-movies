import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

export enum SortBy {
  'SUGGESTED' = 0,
  'TITLE_ASC' = 1,
  'TITLE_DESC' = 2,
  'GENRE_ASC' = 3,
  'GENRE_DESC' = 4,
}

@Component({
  selector: 'lib-actions-bar',
  standalone: true,
  imports: [],
  templateUrl: './actions-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsBarComponent {
  @Output() selectSortBy = new EventEmitter<number>();

  sortByEnum = SortBy;

  onChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectSortBy.emit(+value);
  }
}
