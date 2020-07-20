import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { MatCardModule } from '@angular/material/card';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryListItemComponent } from './category-list/category-list-item/category-list-item.component';
import { RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import {AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';



@NgModule({
  declarations: [
    ProductsComponent,
    CategoryListComponent,
    CategoryListItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    ProductsComponent,
    CategoryListComponent,
    CategoryListItemComponent
  ]
})
export class ProductsModule { }

