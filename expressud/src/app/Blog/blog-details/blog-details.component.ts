// blog-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/Services/blog.service';
import { BlogPost } from 'src/app/Shared1/models/blog-post';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  post!: BlogPost;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      // Proceed with using id as a string
      this.blogService.getBlogPost(id).subscribe(post => this.post = post);
  }
   
  }
}
