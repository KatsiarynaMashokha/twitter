import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {
  selectedPost = null;
  posts: FirebaseListObservable<any[]>;
  constructor(private router: Router, private postService: PostService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();
  }

  addPost(newPostFromChild){
    this.posts.push(newPostFromChild);
  }

  goToDetailPage(clickedPost) {
     this.router.navigate(['posts', clickedPost.$key]);
  };

  editPost(clickedPost) {
    this.selectedPost = clickedPost;
  }

  finishedEditing() {
    this.selectedPost = null;
  }
}
