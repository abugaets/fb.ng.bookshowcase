import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface BookItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  publisher: string;
  isbn: number;
  pages: number;
  rating: number;
  year: number;
  createAt: any;
  review: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private bookCollection: AngularFirestoreCollection<BookItem>;
  public books: Observable<BookItem[]>

  constructor(
    private firestore: AngularFirestore,
  ) {
    this.bookCollection = this.firestore.collection('books');
    this.books = this.bookCollection.valueChanges({idField: 'id'});
  }

  getDocument(id: string) {
    return this.bookCollection.doc(id).valueChanges();
  }

  setDocument(item: any) {
    return this.bookCollection.add(item)
  }

  updateDocument(id: string, item: any) {
    return this.bookCollection.doc(id).update(item)
  }
}
