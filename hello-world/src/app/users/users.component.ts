import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( 
    private blogService: BlogService,     
    private router: Router
    )  { }
  users = []
  ngOnInit() {
    this.getAllUsers()
  }
  getAllUsers() {
    this.blogService.getUsers().subscribe(data => this.users = data)
  }

}
