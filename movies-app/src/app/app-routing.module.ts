import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateActorComponent } from './components/create-actor/create-actor.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { ErrorComponent } from './components/error/error.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SearchComponent } from './components/search/search.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'bienvenido', component: WelcomeComponent },
  { path: 'busqueda', component: SearchComponent },
  { path: 'peliculas/alta', component: CreateMovieComponent },
  { path: 'actor/alta', component: CreateActorComponent },
  { path: 'peliculas/listado', component: MoviesListComponent },
  { path: '**', component: ErrorComponent },
  { path: 'error', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
