import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-inner',
  templateUrl: './blog-inner.component.html',
  styleUrls: ['./blog-inner.component.css']
})
export class BlogInnerComponent implements OnInit {

  public blogId;
  public blogContent;
  public blogComment:string = '' ;
  constructor(
    private blogService: BlogService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(route => {
      this.blogId = route.get('id');
    });
    this.getCurrentBlogDetails();
    // this.blogService.getAll().subscribe(data => {
    //   console.log(data);
    //   this.blogContent = data;
    // });
    
  }
  getCurrentBlogDetails() {
    this.blogService.getBlogById(this.blogId).subscribe(data => 
      {console.log(data);
        this.blogContent = data;
      })
  }

  addComment() {
    if(this.blogComment != '') {
      console.log(this.blogComment);
      this.blogService.addComment(this.blogId,this.blogComment);
      this.blogComment = '';
    }
  }

}
