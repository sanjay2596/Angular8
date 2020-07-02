import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comment;
  public getReply : boolean = false;
  public commentReply = '';
  public isEditComment = false;
  public editedComment = '';

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    console.log(this.comment);
  }

  addReply() {
    this.getReply = !this.getReply;
    return false;
  }

  replyToComment(){
    if(this.commentReply != '') {
      this.blogService.addReply(this.commentReply,this.comment);
      this.commentReply = '';
      this.getReply = false;
    }
  }

  deleteComment(comment) {
    this.blogService.deleteComment(comment);
    return false;
  }
  editComment() {
    this.blogService.editComment(this.comment,this.editedComment);
    this.isEditComment = !this.isEditComment;
  }
  toggleEdit() {
    this.isEditComment = !this.isEditComment;
    return false;
  }

}
