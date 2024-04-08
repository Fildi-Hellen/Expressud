import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/Services/blog.service';
import { BlogPost } from 'src/app/Shared1/models/blog-post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts(): void {
    this.blogService.getBlogPosts().subscribe(blogPosts => this.blogPosts = blogPosts);
  }

}
