import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/landingPost.interface';
import { LandingPostService } from '../service/landing-post.service';

@Component({
  selector: 'app-landing-post',
  templateUrl: './landing-post.component.html',
  styles: [
  ]
})
export class LandingPostComponent implements OnInit {

  posts: Post[] = []

  constructor(private landingPostService: LandingPostService) { }

  ngOnInit(): void {
    this.landingPostService.getAll().subscribe(data => this.posts = data)
  }
}
