import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})

export class FeaturedComponent {
  posts: Post[] = [

  ];
}
