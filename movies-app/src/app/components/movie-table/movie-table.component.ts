import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

// a. id
// b. Nombre
// c. tipo { terror , comedia, amor ,otros }
// d. fecha de estreno,
// e. cantidad de público
// f. Foto de la película
const MOVIES_MOCK = [
  {
    id: 1,
    nombre: 'Black Panter',
    tipo: 'terror',
    fecha_estreno: '25/11/1994',
    cantidad_publico: 5000,
    foto: 'https://images.wallpapersden.com/image/download/black-panther-2018-movie_59997_800x600.jpg',
  },
  {
    id: 2,
    nombre: 'Matrix',
    tipo: 'comedia',
    fecha_estreno: '25/11/1994',
    cantidad_publico: 5000,
    foto: 'https://cdn.wallpapersafari.com/85/58/Xg4Pzp.jpg',
  },
  {
    id: 3,
    nombre: 'Love is in the Air',
    tipo: 'amor',
    fecha_estreno: '25/11/1994',
    cantidad_publico: 5000,
    foto: 'https://godtv.com/wp-content/uploads/2020/10/FollowYourHeart_1680-x-1050p_final-1-800x600.jpeg',
  },
];

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss'],
})
export class MovieTableComponent implements OnInit {
  @Output()
  selectMovie = new EventEmitter<Movie>();
  movies = MOVIES_MOCK;

  constructor() {}

  ngOnInit(): void {}

  test(movie: Movie): void {
    this.selectMovie.emit(movie);
  }
}
