import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillsServices } from './skills.service';

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillsServices.createSkillIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is created succesfully',
    data: result,
  });
});

const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillsServices.getAllSkillsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skills are retrieved succesfully',
    data: result,
  });
});

const getFrontendSkills = catchAsync(async (req, res) => {
  const result = await SkillsServices.getFrontendSkillsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Frontend Skills are retrieved succesfully',
    data: result,
  });
});

const getBackendSkills = catchAsync(async (req, res) => {
  const result = await SkillsServices.getBackendSkillsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Backend Skills are retrieved succesfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillsServices.deleteSkillFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is deleted succesfully',
    data: result,
  });
});

export const SkillsControllers = {
  createSkill,
  getAllSkills,
  deleteSkill,
  getFrontendSkills,
  getBackendSkills,
};
