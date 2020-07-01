import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BlogComment } from '../model/Comment';
import { CommentReply } from '../model/Reply';
import { getDateTime } from '../common/functions';
import { map, catchError } from 'rxjs/operators';

export interface Blog {
  id:number,
  heading: string,
  content: string,
  comments: BlogComment[],
  author: string,
  date: string
}
@Injectable({
  providedIn: 'root'
})


export class BlogService {

  public blogs: Blog[]

  public comments : BlogComment[];

  public baseUrl = 'http://localhost/api';
  dbBlogs
  constructor(
    private http: HttpClient
  ) { }

  // getBlogById(id): Observable<any> {
  //   return this.http.get(this.baseUrl);
  // }

    getAll(): Observable<any[]> {
      return this.http.get(`${this.baseUrl}/list`).pipe(
        map((res) => {
          this.dbBlogs = res['data'];
          return this.dbBlogs;
      }))
    }


    getById(id): Observable<any[]> {
      return this.http.get(`${this.baseUrl}/get-by-id?ab=${id}`).pipe(
        map((res) => {
          this.dbBlogs = res['data'];
          return this.dbBlogs;
      }))
    }
  getAllBlogs() : Observable<any[]> {
    return of(JSON.parse(localStorage.getItem('blogs')))
  }
  getBlogById(id)  {
    this.blogs  = JSON.parse(localStorage.getItem('blogs'))
     return of(this.blogs.find(blog => blog.id == id))
    // return blogs.find(blog => blog.id == id);
  }

  addComment(id,comment) {
    let currentComment: BlogComment = {
      text : comment,
      blog_id: id,
      status: 'approved',
      replies: [],
      user_id: 0,
      username: 'karthik',
      id: Math.floor(Math.random() * (100 - 10 + 1) ) + 10,
      time: getDateTime()
    };
    this.blogs= JSON.parse(localStorage.getItem('blogs'));
    this.blogs.find(blog => blog.id == id).comments.push(currentComment);
    localStorage.setItem("blogs", JSON.stringify(this.blogs))
  }
  addReply(reply,comment:BlogComment) {
    let currentReply : CommentReply = {
      text: reply,
      id: Math.floor(Math.random() * (3482 - 256 + 1) ) + 256,
      comment_id: comment.id,
      username: comment.username,
      user_id: comment.user_id
    }
    this.blogs.find(blog => blog.id == comment.blog_id).comments
              .find(comment => comment.id == currentReply.comment_id).replies
              .push(currentReply);
    localStorage.setItem("blogs", JSON.stringify(this.blogs))
  }

  deleteComment(blogComment:BlogComment) {
    let latestComments = this.blogs.find(blog => blog.id == blogComment.blog_id).comments
              .filter(comment => comment.id != blogComment.id);
    this.blogs.find(blog => blog.id == blogComment.blog_id).comments = latestComments;
    localStorage.setItem("blogs", JSON.stringify(this.blogs))

  }
  editComment(originalComment:BlogComment,newComment:string) {
    this.blogs.find(blog => blog.id == originalComment.blog_id).comments
    .find(comment => comment.id == originalComment.id).text = newComment;
    localStorage.setItem("blogs", JSON.stringify(this.blogs))

  }

  addBlog(title, content, author){
    let blog : Blog = { 
      heading: title, 
      content: content, 
      author : author  , 
      id : Math.floor(Math.random() * (100 - 10 + 1) ) + 10,
      date: getDateTime(),
      comments: []
    }
    if(localStorage.getItem("blogs")){
      this.blogs = JSON.parse(localStorage.getItem("blogs"))
      this.blogs.push(blog)
      localStorage.setItem("blogs", JSON.stringify(this.blogs))
    } else {
        let blogs = [];
        blogs.push(blog);
        localStorage.setItem("blogs", JSON.stringify(blogs))
    }
  }

  removeBlog(blog){
    this.blogs = JSON.parse(localStorage.getItem("blogs"))
    let index = this.blogs.indexOf(blog)
    this.blogs.splice(index, 1)
    localStorage.setItem("blogs", JSON.stringify(this.blogs))
  }
}
