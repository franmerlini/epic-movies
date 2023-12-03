import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from '@epic-movies/libs/shell/ui/footer';
import { HeaderComponent } from '@epic-movies/libs/shell/ui/header';

@Component({
  selector: 'lib-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col">
      <lib-header class="fixed w-full z-50" />
      <main class="flex justify-center grow bg-base-100 py-8 mt-16">
        <router-outlet />
      </main>
      <lib-footer />
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
