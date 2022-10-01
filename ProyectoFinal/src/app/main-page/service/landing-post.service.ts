import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Posts } from '../interface/landingPosts.interface';

@Injectable({
  providedIn: 'root'
})
export class LandingPostService {

  private readonly API = environment.API

  constructor(private readonly http : HttpClient) { }

  findAll(): Observable<Posts>{
    return this.http.get<Posts>(`${this.API}/top_rated?api_key=${environment.apiKey}`)
  }

  // getAll() : Observable<Post[]> {
  //   const url = `${this.baseUrl}/posts`
  //   return this.http.get<Post[]>(url)
  // }

  // getById(id: number) : Observable<Post>{
  //   const url = `${this.baseUrl}/posts/${id}`
  //   return this.http.get<Post>(url)

  // }

}
