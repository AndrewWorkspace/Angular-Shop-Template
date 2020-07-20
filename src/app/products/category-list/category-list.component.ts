import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../shared/models/category-model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
  export class CategoryListComponent implements OnInit {

  categories: Category[];

  constructor( private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe( data => {
      this.categories = data.map( e => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc,
          caption: e.payload.doc,
          imagPath: e.payload.doc,
          ...e.payload.doc.data()
        } as Category;
      });
    });
  }
}
