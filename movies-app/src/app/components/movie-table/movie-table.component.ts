import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

const COUNTRIES = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754,
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199,
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463,
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397,
  },
];
@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss'],
})
export class MovieTableComponent implements OnInit {
  movies = MOVIES_MOCK;
  countries = COUNTRIES;
  @Output()
  propagar = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  test(movie) {
    this.propagar.emit(movie);
  }
}
