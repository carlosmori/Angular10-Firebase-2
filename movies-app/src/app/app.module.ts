import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SearchComponent } from './components/search/search.component';
import { CreateActorComponent } from './components/create-actor/create-actor.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { ErrorComponent } from './components/error/error.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MovieTableComponent } from './components/movie-table/movie-table.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchComponent,
    CreateActorComponent,
    ActorListComponent,
    MoviesListComponent,
    CreateMovieComponent,
    ErrorComponent,
    MovieTableComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
