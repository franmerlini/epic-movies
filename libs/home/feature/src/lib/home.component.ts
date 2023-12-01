import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { MoviesPageActions } from '@epic-movies/libs/home/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [],
  template: `<p>home works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(MoviesPageActions.init());
  }
}
