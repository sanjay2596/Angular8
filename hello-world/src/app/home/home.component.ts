import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router )  { }
  blogs = []
  ngOnInit() {
    this.blogs = JSON.parse(localStorage.getItem("blogs"))
  }
  removeBlog(blog){
    let index = this.blogs.indexOf(blog)
    this.blogs.splice(index, 1)
    localStorage.setItem("blogs", JSON.stringify(this.blogs))
    alert("blog has been Deleted")
  }

  onSelect(blog){
     this.router.navigate(['/',blog.id]);
  }
}
