/* eslint-disable @typescript-eslint/no-explicit-any */
import { TSkills } from './skills.interface';
import { Skills } from './skills.model';

const createSkillIntoDB = async (payload: TSkills) => {
  const result = await Skills.create(payload);
  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await Skills.find({ isDeleted: false }).sort({ createdAt: -1 });
  return result;
};

const getFrontendSkillsFromDB = async () => {
  const result = await Skills.find({ category: "Frontend" });
  return result;
};

const getBackendSkillsFromDB = async () => {
  const result = await Skills.find({ category: "Backend" });
  return result;
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
};
