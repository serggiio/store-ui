import { Comment } from "../../models/comment.model,";

export interface CommentHttpResponse {
    comments: Comment[];
    total: number;
    limit: number;
}