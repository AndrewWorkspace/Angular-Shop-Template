import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { LayoutsModule } from '../../layouts/layouts.module'
import { ProductsModule } from '../../products/products.module'
import { RouterModule } from '@angular/router';
import { PostsModule } from '../../posts/posts.module';
import {MaterialModule} from '../../shared/material/material.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    RouterModule,
    ProductsModule,
    PostsModule,
    MaterialModule
  ]
})
export class HomeModule { }
