// edit-blog.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/Services/blog.service';
import { BlogPost } from 'src/app/Shared1/models/blog-post';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  post!: BlogPost 

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
    this.blogService.getBlogPost(id).subscribe(post => this.post = post);
    }
  }

  updatePost(): void {
    this.blogService.updateBlogPost(this.post.id, this.post).subscribe(() => {
      // Handle success, e.g., show a success message or redirect to another page
    });
  }
}
