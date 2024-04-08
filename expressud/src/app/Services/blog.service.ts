import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../Shared1/models/blog-post';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = '/api/blogs';

  constructor(private http: HttpClient) { }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.apiUrl);
  }

  getBlogPost(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.apiUrl}/${id}`);
  }

  createBlogPost(blogPost: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.apiUrl, blogPost);
  }

  updateBlogPost(id: string, blogPost: BlogPost): Observable<BlogPost> {
    return this.http.put<BlogPost>(`${this.apiUrl}/${id}`, blogPost);
  }

  deleteBlogPost(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
