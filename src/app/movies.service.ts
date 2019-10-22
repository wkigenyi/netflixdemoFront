import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesUrl = 'http://localhost:8000/api/movies';
  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.moviesUrl);
  }
}
