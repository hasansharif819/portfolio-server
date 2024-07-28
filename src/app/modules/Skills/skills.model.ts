import { Schema, model } from 'mongoose';
import { Category } from './skills.constant';
import { TSkills } from './skills.interface';

const skillsSchema = new Schema<TSkills>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    progress: {
      type: Number,
    },
    category: {
      type: String,
      enum: {
        values: Category,
        message: '{VALUE} is not a valid category',
      },
      required: [true, 'Category is required'],
    },
    img: { 
      type: String, 
      required: [true, 'Image is required'] 
    },
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

export const Skills = model<TSkills>('Skills', skillsSchema);
