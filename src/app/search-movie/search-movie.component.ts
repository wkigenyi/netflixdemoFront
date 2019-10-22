import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DBService } from '../db-service.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import * as $ from 'jquery';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  movies$: Observable<any[]>;
  private searchTerms = new Subject<string>();
  private el: HTMLElement;
  constructor(private dbService: DBService) { }

  ngOnInit() {
    this.movies$ = this.searchTerms.pipe(
      // Wait 300ms after the keystroke before considering the term
      debounceTime(300),
      // ignore new search term if it is the same as the previous one
      distinctUntilChanged(),
      // Switch to a new search Observable each time the term changes
      switchMap((term: string) => this.dbService.searchMovies(term))
    );
  }

  searchMovie( searchTerm: string) {
    this.searchTerms.next(searchTerm);
    $('#searchmodal').modal('shows');
  }

}
