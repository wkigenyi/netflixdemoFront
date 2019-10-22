import { Component, OnInit } from '@angular/core';
import { DBService } from '../db-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[];
  constructor(private moviesService: DBService) { }

  getMovies() {
    this.moviesService.getMovies().subscribe(
      movies => { this.movies = movies; }
    );
  }

  ngOnInit() {
    this.getMovies();
  }

}
