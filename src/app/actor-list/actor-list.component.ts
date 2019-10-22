import { Component, OnInit } from '@angular/core';
import { DBService } from '../db-service.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors: any[];

  constructor(private actorService: DBService) { }

  getActors() {
    this.actorService.getActors().subscribe(
      actors => { this.actors = actors; }
    );
  }

  ngOnInit() {
    this.getActors();
  }

}
