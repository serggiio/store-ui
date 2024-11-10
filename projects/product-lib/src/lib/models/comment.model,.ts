import { User } from "./user.model";

export interface Comment {
    id: number;
    body: string;
    postId: string;
    likes: number;
    user: User;
}