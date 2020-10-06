import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  selectedMovie: Movie;
  constructor() {}

  ngOnInit(): void {}
  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }
}
