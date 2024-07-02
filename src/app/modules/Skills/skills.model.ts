import { Schema, model } from 'mongoose';
import { Category } from './skills.constant';
import { TSkills } from './skills.interface';

const skillsSchema = new Schema<TSkills>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    category: {
      type: String,
      enum: {
        values: Category,
        message: '{VALUE} is not a valid category',
      },
      required: [true, 'Category is required'],
    },
    img: { type: String, default: '' },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

export const Skills = model<TSkills>('Skills', skillsSchema);
