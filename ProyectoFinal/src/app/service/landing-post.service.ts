import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable, tap } from 'rxjs';
import { Posts } from '../interface/landingPosts.interface';
import { Post } from '../interface/landingPost.interface';

@Injectable({
  providedIn: 'root'
})
export class LandingPostService {

  private readonly API = environment.API

  constructor(private readonly http : HttpClient) { }

  findAll(): Observable<Post[]>{
    return this.http.get<Posts>(`${this.API}/top_rated`, {
      params: {
        'api_key': environment.apiKey
      }
    }).pipe (
      //tap(console.log),
      map<Posts, Post[]>( resp => resp.results)
    )
  } 

  findById(id: number){
    return this.http.get<Post>(`${this.API}/${id}`, {
      params: {
        'api_key': environment.apiKey
      }
    })
  }

}

