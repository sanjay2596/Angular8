import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public name:string = '';
  public password:string = '';
  public role:string = '';
  public status:boolean = true;
  constructor(
    private blogService: BlogService,
    private router: Router,
  ) { }
  blogs = [];

  ngOnInit(): void {
  }

  addUser(){
    if(this.name && this.password && this.role != '') {
      this.blogService.addUser(this.name,this.password,this.role,this.status).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/users');

      })
    }
  }
}
