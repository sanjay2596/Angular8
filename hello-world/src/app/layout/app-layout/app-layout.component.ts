import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {


  public blogId;
  public blogs;
  constructor(
    private blogService: BlogService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {

    // this.getCurrentBlogDetails();
    this.blogService.getAll().subscribe(data => {
      console.log(data);
      this.blogs = data;
    });
  }

}
