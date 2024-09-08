/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import { TSkills } from './skills.interface';
import { Skills } from './skills.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const createSkillIntoDB = async (payload: TSkills) => {
  const result = await Skills.create(payload);
  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await Skills.find({ isDeleted: false }).sort({ createdAt: -1 });
  return result;
};

const getFrontendSkillsFromDB = async () => {
  const result = await Skills.find({ category: "Frontend", isDeleted: false }).sort({ createdAt: -1 });
  return result;
};

const getBackendSkillsFromDB = async () => {
  const result = await Skills.find({ category: "Backend", isDeleted: false }).sort({ createdAt: -1 });
  return result;
};

const updateSkillIntoDB = async (id: string, payload: Partial<TSkills>) => {
  const { ...skillRemainingData } = payload;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const updatedBasicSkillInfo = await Skills.findByIdAndUpdate(
      id,
      skillRemainingData,
      {
        new: true,
        runValidators: true,
        session,
      },
    );

    if (!updatedBasicSkillInfo) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update Skill');
    }

    await session.commitTransaction();
    await session.endSession();

    const result = await Skills.findById(id);

    return result;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update Skill');
  }
};

const deleteSkillFromDB = async (id: string) => {
  const result = await Skills.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return result;
};

export const SkillsServices = {
  getAllSkillsFromDB,
  deleteSkillFromDB,
  createSkillIntoDB,
  getFrontendSkillsFromDB,
  getBackendSkillsFromDB,
  updateSkillIntoDB
};
