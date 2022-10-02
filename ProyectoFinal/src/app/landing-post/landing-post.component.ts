import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/landingPost.interface';
import { Posts } from '../interface/landingPosts.interface';
import { LandingPostService } from '../service/landing-post.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-post',
  templateUrl: './landing-post.component.html',
  styles: [
  ]
})
export class LandingPostComponent implements OnInit {

  posts : Post[] = []

  constructor(private readonly LandingPostService : LandingPostService) { }

  ngOnInit(): void {
    this.LandingPostService.findAll().subscribe(data => this.posts = data)
  }
}