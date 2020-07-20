import {Component,  OnInit} from '@angular/core';
import { Post } from '../../shared/models/post-model';
import  { PostsService } from '../../shared/services/posts.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {



  posts: Post[];

  constructor( private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe( data => {
      this.posts = data.map( e => {
        return {
          id: e.payload.doc.id,
          postImage: e.payload.doc,
          postLabel: e.payload.doc,
          postTitle: e.payload.doc,
          postCaption: e.payload.doc,
          postDate: e.payload.doc,
          ...e.payload.doc.data()
        } as Post;
      });
    });
  }

}
