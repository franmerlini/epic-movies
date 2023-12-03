import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocalStorageKeys, LocalStorageService } from '@epic-movies/libs/shared/data-access/local-storage';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('searchButton') searchIcon!: ElementRef<HTMLButtonElement>;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  isDarkMode = LocalStorageService.getItem<boolean>(LocalStorageKeys.IS_DARK_MODE);

  ngAfterViewInit(): void {
    this.searchIcon.nativeElement.addEventListener('click', () => {
      this.searchInput.nativeElement.classList.remove('hidden');
      this.searchInput.nativeElement.focus();
    });

    this.searchInput.nativeElement.addEventListener('blur', () => {
      this.searchInput.nativeElement.classList.add('hidden');
    });
  }

  setIsDarkMode(event: Event): void {
    const value = (event.target as HTMLInputElement).checked;
    LocalStorageService.setItem(LocalStorageKeys.IS_DARK_MODE, value);
  }
}
