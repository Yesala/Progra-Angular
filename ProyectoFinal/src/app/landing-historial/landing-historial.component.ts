import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../interface/landingPost.interface';
import { LandingPostService } from '../service/landing-post.service';

@Component({
  selector: 'app-landing-historial',
  templateUrl: './landing-historial.component.html',
  styleUrls: ['./landing-historial.component.css']
})
export class LandingHistorialComponent implements OnInit {

  post!: Post;

  constructor(private activateRoute : ActivatedRoute, private landingPostService : LandingPostService) { }

  ngOnInit(): void {
    
  }
}
