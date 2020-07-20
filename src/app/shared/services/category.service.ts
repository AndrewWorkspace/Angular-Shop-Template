import { Injectable } from '@angular/core';
import { Category } from '../models/category-model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private firestore: AngularFirestore) { }

  getCategories() {
    return this.firestore.collection('categories').snapshotChanges();
  }

  createCategory( category: Category ) {
    return this.firestore.collection('categories').add(category);
  }

  updateCategory( category: Category ) {
    delete category.id;
    this.firestore.doc('categories/' + category.id).update(category);
  }

  deleteCategory(categoryId: string) {
    this.firestore.doc('category/' + categoryId ).delete();
  }

}
