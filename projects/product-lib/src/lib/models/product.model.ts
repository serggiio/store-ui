import { Comment } from "./comment.model,";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  comments?: Comment[];
}
