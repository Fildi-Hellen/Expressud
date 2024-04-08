// create-blog.component.ts
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/Services/blog.service';
import { BlogPost } from 'src/app/Shared1/models/blog-post';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  post: BlogPost = new BlogPost();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  createPost(): void {
    this.blogService.createBlogPost(this.post).subscribe(() => {
      // Handle success, e.g., show a success message or redirect to another page
    });
  }
}
