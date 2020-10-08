import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actor } from '../interfaces/actor';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(
    public firestore: AngularFirestore // Inject Firestore service
  ) {}
  getActors() {
    const moviesRef = this.firestore.collection<Actor>('actors');
    return moviesRef.valueChanges();
  }
  createActor(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('actors')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
}
