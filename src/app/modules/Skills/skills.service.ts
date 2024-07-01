/* eslint-disable @typescript-eslint/no-explicit-any */
import { TSkills } from './skills.interface';
import { Skills } from './skills.model';

const createSkillIntoDB = async (payload: TSkills) => {
  const result = await Skills.create(payload);
  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await Skills.find();
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
  createSkillIntoDB
};
