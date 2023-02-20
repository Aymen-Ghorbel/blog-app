import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  private baseUrl = 'http://localhost:8000';

    constructor(private http: HttpClient) { }

    getAllBlogs(): Observable<Object> {
        return this.http.get(`${this.baseUrl}`);
    }
   
    addBlog(blog: any): Observable<object> {
        return this.http.post(`${this.baseUrl}/post`,blog);
    }

    getBlogById(id: string): Observable<Object> {
      console.log('id service', id);
      return this.http.get(`${this.baseUrl}/${id}`);
    }

    upVote(blog: Blog): Observable<Object> {
      let localBlog = blog;
      localBlog.vote += 1;
      return this.http.put(`${this.baseUrl}/${blog.id}`,blog);
    }

    downVote(blog: Blog): Observable<Object> {
      let localBlog = blog;
      localBlog.vote -= 1;
      return this.http.put(`${this.baseUrl}/${blog.id}`,blog);
    }
}
