import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, of } from 'rxjs';

import { APP_CONFIG } from '@epic-movies/libs/shared/app-config';
import { LocalStorageKeys, LocalStorageService } from '@epic-movies/libs/shared/data-access/local-storage';
import { mockedMovies } from '@epic-movies/libs/shared/data-access/mocks';
import { Movie } from '@epic-movies/libs/shared/data-access/models';

@Injectable()
export class MoviesApiService {
  private readonly url: string;
  private appConfig = inject(APP_CONFIG);
  private readonly http = inject(HttpClient);

  constructor() {
    this.url = `${this.appConfig.baseURL}/movies`;
  }

  getMovies(): Observable<Movie[]> {
    // return this.http.get<Movie[]>(`${this.url}`);
    return of(mockedMovies);
  }

  getMoviesOnWatchlist(): Observable<Movie[]> {
    const onWatchlistIds = LocalStorageService.getItem<number[]>(LocalStorageKeys.WATCHLIST_IDS);
    return of(mockedMovies.filter(({ id }) => onWatchlistIds?.includes(id)));
  }

  addToWatchlist(movie: Movie): Observable<boolean> {
    // return this.http.post<Movie>(`${this.url}/watchlist`, movie);
    const onWatchlistIds = LocalStorageService.getItem<number[]>(LocalStorageKeys.WATCHLIST_IDS);
    const newOnWatchlistIds = [...(onWatchlistIds ?? []), movie.id];
    LocalStorageService.setItem<number[]>(LocalStorageKeys.WATCHLIST_IDS, newOnWatchlistIds);
    return of(true);
  }

  removeFromWatchlist(movieId: number): Observable<boolean> {
    // return this.http.delete<Movie>(`${this.url}/watchlist/${movieId}`);
    const onWatchlistIds = LocalStorageService.getItem<number[]>(LocalStorageKeys.WATCHLIST_IDS);
    const newOnWatchlistIds = onWatchlistIds?.filter((id) => id !== movieId);
    LocalStorageService.setItem<number[]>(LocalStorageKeys.WATCHLIST_IDS, newOnWatchlistIds ?? []);
    return of(true);
  }
}
