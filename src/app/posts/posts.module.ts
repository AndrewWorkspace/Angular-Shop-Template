import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import {MaterialModule} from '../shared/material/material.module';



@NgModule({
  declarations: [PostListComponent, PostListItemComponent],
  exports: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PostsModule { }
