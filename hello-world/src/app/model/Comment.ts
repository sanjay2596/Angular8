import {CommentReply} from './Reply';
export interface BlogComment  {
    text: String;
    id: number;
    blog_id: number;
    user_id: number;
    username: string;
    status: string;
    replies: CommentReply[];
    time: string
}