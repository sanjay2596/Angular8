import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private blogService: BlogService )  { }
  blogs = []
  ngOnInit() {
    this.getAllBlogs()
    // this.blogService.getById(3).subscribe(data => console.log(data));
    
  }
  getAllBlogs() {
    this.blogService.getAll().subscribe(data => this.blogs = data)
  }
  removeBlog(blog){
    // let index = this.blogs.indexOf(blog)
    // this.blogs.splice(index, 1)
    // localStorage.setItem("blogs", JSON.stringify(this.blogs))
    this.blogService.deleteBlog(blog).subscribe(data => {
      alert("blog has been Deleted")
      this.getAllBlogs()
    })


  }

}
