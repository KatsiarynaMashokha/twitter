import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PostService]
})
export class AdminComponent {
  @Output() newPostSender = new EventEmitter();
  constructor(private postService: PostService) { }

  addPost(newTitle: string, newAuthor: string, newDesc: string, newImage: string, newType: string) {
  let postToAdd: Post = new Post(newTitle, newAuthor, newDesc, newImage, newType);
  this.postService.addPost(postToAdd);
  }
}
