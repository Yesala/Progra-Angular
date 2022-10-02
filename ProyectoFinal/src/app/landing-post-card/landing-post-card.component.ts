import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../interface/landingPost.interface';

@Component({
  selector: 'app-landing-post-card',
  templateUrl: './landing-post-card.component.html',
  styleUrls: ['./landing-post-card.component.css']
})
export class LandingPostCardComponent {

  @Input() post! : Post

  poster(){
    return `https://image.tmdb.org/t/p/w185/${this.post.poster_path}`
  }

}
