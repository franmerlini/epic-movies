import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [],
  template: `<p>home works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
