import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

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

  ngAfterViewInit(): void {
    this.searchIcon.nativeElement.addEventListener('click', () => {
      this.searchInput.nativeElement.classList.remove('hidden');
      this.searchInput.nativeElement.focus();
    });

    this.searchInput.nativeElement.addEventListener('blur', () => {
      this.searchInput.nativeElement.classList.add('hidden');
    });
  }
}
