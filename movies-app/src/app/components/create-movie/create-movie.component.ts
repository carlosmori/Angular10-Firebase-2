import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/interfaces/actor';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss'],
})
export class CreateMovieComponent implements OnInit {
  nombre: string;
  newMovie: Movie = {
    id: null,
    nombre: '',
    tipo: 'Terror',
    fecha_estreno: '',
    cantidad_publico: null,
    borrado: 1,
    actor: {
      id: null,
      foto: '',
      nombre: '',
      apellido: '',
      sexo: '',
      fecha_nacimiento: '',
    },
  };
  movies: Movie[];
  loading: boolean;
  constructor(private router: Router, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies.filter((mov) => mov.borrado === 1);
    });
  }
  CargarPelicula(event) {
    event.preventDefault();
    event.stopPropagation();
    this.newMovie.id = this.movies[this.movies.length - 1].id + 1;
    this.moviesService.createMovie(this.newMovie);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/busqueda']);
    }, 1500);
  }

  selectActor(actor: Actor) {
    this.newMovie.actor = actor;
  }
}
