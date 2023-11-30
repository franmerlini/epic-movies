import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesApiService {
  constructor(private http: HttpClient) {}
}
