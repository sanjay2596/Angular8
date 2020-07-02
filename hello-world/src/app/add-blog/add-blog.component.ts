import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  public title:string = '';
  public content:string = '';
  public author:string = '';
  constructor(
    private blogService: BlogService,
    private router: Router,
    // private route: Route
  ) { }
  blogs = [];

  ngOnInit() {

  }
   
  addBlog(){
    if(this.title && this.content && this.author != '') {
      this.blogService.addBlog(this.title,this.content,this.author).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('');

      })
    }
  }
}
