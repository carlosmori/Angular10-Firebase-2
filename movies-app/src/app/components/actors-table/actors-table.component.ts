import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actors-table',
  templateUrl: './actors-table.component.html',
  styleUrls: ['./actors-table.component.scss'],
})
export class ActorsTableComponent implements OnInit {
  @Output()
  selectMovie = new EventEmitter<any>();
  actors;
  selectedRow: number;

  constructor(private actorsService: ActorsService) {}

  ngOnInit(): void {
    this.actorsService.getActors().subscribe((res) => {
      this.actors = res;
    });
  }
  selectActor(actor: Actor) {
    this.selectMovie.emit(actor);
    this.selectedRow = actor.id;
  }
}
