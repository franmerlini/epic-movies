import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { mockedMovies } from '@epic-movies/libs/shared/assets';
import { Movie } from '@epic-movies/libs/shared/data-access/models';

@Injectable()
export class MoviesApiService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return of(mockedMovies);
  }
}
