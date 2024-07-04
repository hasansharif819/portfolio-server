import { Schema, model } from 'mongoose';
import { TBlogs } from './blogs.interface';

const blogsSchema = new Schema<TBlogs>(
  {
    id: {
      type: String,
      required: [true, 'ID is required'],
      unique: true,
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    summary: {
      type: String,
      required: [true, 'Summary is required'],
    },
    img: { type: String, default: '' },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

export const Blogs = model<TBlogs>('Blogs', blogsSchema);
