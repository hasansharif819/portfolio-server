import { Schema, model } from 'mongoose';
import {
  TProjects,
} from './projects.interface';

const projectsSchema = new Schema<TProjects>({
  title: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  frontendurl: {
    type: String,
    trim: true,
    required: true,
  },
  backendurl: {
    type: String,
    trim: true,
    required: true,
  },
  liveurl: {
    type: String,
    trim: true,
    required: true,
  },
  frontendTechnology: {
    type: String,
    trim: true,
    required: true,
  },
  backendTechnology: {
    type: String,
    trim: true,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Projects = model<TProjects>('Projects', projectsSchema);
