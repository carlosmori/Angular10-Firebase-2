import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor';
import { Movie } from 'src/app/interfaces/movie';

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
    tipo: '',
    fecha_estreno: '',
    cantidad_publico: null,
    actor: {
      id: null,
      foto: '',
      nombre: '',
      apellido: '',
      sexo: '',
      fecha_nacimiento: '',
    },
  };
  constructor() {}

  ngOnInit(): void {}
  CargarPelicula(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.newMovie);
    console.log(this.nombre);
  }

  selectActor(actor: Actor) {
    this.newMovie.actor = actor;
  }
}
