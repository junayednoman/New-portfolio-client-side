
export type TBlog = {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  description: string;
  tags: string[];
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
}
