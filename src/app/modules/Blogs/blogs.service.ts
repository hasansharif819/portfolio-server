/* eslint-disable @typescript-eslint/no-explicit-any */
import { TBlogs } from './blogs.interface';
import { Blogs } from './blogs.model';

const createBlogIntoDB = async (payload: TBlogs) => {
  const result = await Blogs.create(payload);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blogs.find();
  return result;
};

const updateBlogIntoDB = async (id: string, payload: Partial<TBlogs>) => {
  console.log('update Blog', id, payload);
};

const deleteBlogFromDB = async (id: string) => {
  const result = await Blogs.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return result;
};

export const BlogsServices = {
  getAllBlogsFromDB,
  deleteBlogFromDB,
  createBlogIntoDB,
  updateBlogIntoDB
};
