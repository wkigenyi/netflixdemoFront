import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DBService } from '../db-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Observable<any>;
  constructor(private route: ActivatedRoute, private movieService: DBService) { }

  ngOnInit() {
    this.movieService.getMovie(+this.route.snapshot.paramMap.get('id')).subscribe(
      movie => { this.movie = movie; }
    );
  }

}
