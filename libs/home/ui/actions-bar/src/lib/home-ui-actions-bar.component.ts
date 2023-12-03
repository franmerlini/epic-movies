import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-home-ui-actions-bar',
  standalone: true,
  imports: [CommonModule],
  template: `<p>home-ui-actions-bar works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeUiActionsBarComponent {}
