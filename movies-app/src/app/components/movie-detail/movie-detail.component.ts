import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  @Input()
  movie: Movie;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}
  borrarPelicula() {
    this.moviesService.logicDelete({ movieDocumentId: this.movie.movieDocumentId, borrado: 0 });
    console.log(this.movie);
  }
}
