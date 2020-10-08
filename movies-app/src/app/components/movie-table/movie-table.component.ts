import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

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
    actor: {
      id: 1,
      nombre: 'Tom',
      apellido: 'Cruise',
      sexo: 'Masculino',
      fecha_nacimiento: '25/11/1994',
      foto:
        'https://firebasestorage.googleapis.com/v0/b/saladejuegos-556ab.appspot.com/o/guy.png?alt=media&token=7c401f1d-6b7b-4a4a-b161-fe2bf49d6320',
    },
  },
  {
    id: 2,
    nombre: 'Matrix',
    tipo: 'comedia',
    fecha_estreno: '25/11/1994',
    cantidad_publico: 5000,
    foto: 'https://cdn.wallpapersafari.com/85/58/Xg4Pzp.jpg',
    actor: {
      id: 2,
      nombre: 'Megan',
      apellido: 'Fox',
      sexo: 'Femenino',
      fecha_nacimiento: '25/11/1994',
      foto:
        'https://firebasestorage.googleapis.com/v0/b/saladejuegos-556ab.appspot.com/o/girl-2.png?alt=media&token=24bf2f93-34a4-4deb-b0f9-5812a38fccfa',
    },
  },
  {
    id: 3,
    nombre: 'Love is in the Air',
    tipo: 'amor',
    fecha_estreno: '25/11/1994',
    cantidad_publico: 5000,
    foto: 'https://godtv.com/wp-content/uploads/2020/10/FollowYourHeart_1680-x-1050p_final-1-800x600.jpeg',
    actor: {
      id: 3,
      nombre: 'Cameron',
      apellido: 'Diaz',
      sexo: 'Femenino',
      fecha_nacimiento: '25/11/1994',
      foto:
        'https://firebasestorage.googleapis.com/v0/b/saladejuegos-556ab.appspot.com/o/girl-2.png?alt=media&token=24bf2f93-34a4-4deb-b0f9-5812a38fccfa',
    },
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
  movies;
  selectedRow: number;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((res) => {
      this.movies = res;
    });
  }

  test(movie: Movie): void {
    this.selectMovie.emit(movie);
    this.selectedRow = movie.id;
  }
}
