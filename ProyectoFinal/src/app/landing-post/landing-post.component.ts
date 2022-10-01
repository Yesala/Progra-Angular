import { Component, OnInit } from '@angular/core';
import { LandingPostService } from '../service/landing-post.service';

@Component({
  selector: 'app-landing-post',
  templateUrl: './landing-post.component.html',
  styles: [
  ]
})
export class LandingPostComponent implements OnInit {

  //intervalo$ = interval(1000).pipe( take(10) )

  constructor(private readonly LandingPostService : LandingPostService) {}

  ngOnInit(): void {
    this.LandingPostService.findAll().subscribe(console.log)
  }
}
 