import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  private apiUrl = 'http://localhost:8000/api';
  private httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};
  constructor(private httpClient: HttpClient) { }

  getActors(): Observable<Movie[]> {
    const url = `${this.apiUrl}/actors`;
    return this.httpClient.get<Movie[]>(url);
  }

  getMovies(): Observable<Movie[]> {
    const url = `${this.apiUrl}/movies`;
    return this.httpClient.get<any[]>(url);
  }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.apiUrl}/movies/${id}`;
    return this.httpClient.get<Movie>(url);
  }

  searchMovies(searchTerm: string): Observable<Movie[]> {
    /** Get movies whose title matches the search term */
    searchTerm = searchTerm.trim();
    if (!searchTerm) { return of([]); }
    const url = `${this.apiUrl}/movies/?search=${searchTerm}`;
    return this.httpClient.get<Movie[]>(url);
  }
}
