import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { APP_CONFIG } from '@epic-movies/libs/shared/app-config';
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
    return of(mockedMovies).pipe(delay(2000));
  }
}
