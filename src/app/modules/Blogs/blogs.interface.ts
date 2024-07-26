import { Date } from "mongoose";

export type TBlogs = {
  title: string;
  description: string;
  img?: string;
  isDeleted: boolean;
  createdAt?: Date;
};
