import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, map, take } from 'rxjs';
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

  numeros : string[] = []

  intervalo$ = interval(1000).pipe( take(15) )

  ngOnInit(): void {
    this.intervalo$.pipe(
      map( n => `Gasto ${n+1}, día, mes, año` ),
      take(15)
    ).subscribe({
       next: data => this.numeros.push(data),
       error: err => console.warn('Error: ', err),
       complete: () => console.log("Interval completed")
    })

  }
}
