import { Date } from "mongoose";

export type TBlogs = {
  id: string;
  title: string;
  subject: string;
  description: string;
  summary?: string;
  img?: string;
  isDeleted: boolean;
  createdAt?: Date;
};
