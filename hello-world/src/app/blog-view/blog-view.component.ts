import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public blogId;
  public blog;
  constructor( private router : ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(param => { this.blogId = param.get('id');
    
  })
  this.getBlogById ()
  }
  getBlogById (){
   let  blogs  = JSON.parse(localStorage.getItem('blogs'))
   this.blog = blogs.find(blog => blog.id == this.blogId)
   console.log(blogs)
   console.log(this.blog)
  }

}
