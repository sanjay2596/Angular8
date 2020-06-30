import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor() { }
  blogs = [];

  ngOnInit() {
  }
   
  addBlog(title, content, author){
    let blog = { title: title.value, content: content.value, author : author.value  , id : Math.floor(Math.random() * (100 - 10 + 1) ) + 10, date: new Date()}
    if(localStorage.getItem("blogs")){
      this.blogs = JSON.parse(localStorage.getItem("blogs"))
    }
    this.blogs.push(blog)
    localStorage.setItem("blogs", JSON.stringify(this.blogs))
    title.value=""
    content.value=""
    author.value=""
  }
}
