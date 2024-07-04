import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TProjects } from './projects.interface';
import { Projects } from './projects.model';
import mongoose from 'mongoose';


const createProjectIntoDB = async (payload: TProjects) => {
  const result = await Projects.create(payload);
  return result;
};

const getAllProjectsFromDB = async () => {
  const result = await Projects.find().sort({ createdAt: -1 });
  return result;
};

const getSingleProjectFromDB = async (id: string) => {
  const result = await Projects.findById(id);
  return result;
};

const updateProjectIntoDB = async (id: string, payload: Partial<TProjects>) => {
  const { ...projectRemainingData } = payload;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const updatedBasicProjectInfo = await Projects.findByIdAndUpdate(
      id,
      projectRemainingData,
      {
        new: true,
        runValidators: true,
        session,
      },
    );

    if (!updatedBasicProjectInfo) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update Project');
    }

    await session.commitTransaction();
    await session.endSession();

    const result = await Projects.findById(id);

    return result;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update project');
  }
};

const deleteProjectFromDB = async (id: string) => {
  const result = await Projects.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return result;
};

export const ProjectsServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
};
