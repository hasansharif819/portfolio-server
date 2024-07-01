import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SkillsControllers } from './skills.controller';
import { skillsValidations } from './skills.validation';

const router = express.Router();

router.post(
  '/create-skill',
  validateRequest(skillsValidations.createSkillsValidationSchema),
  SkillsControllers.createSkill,
);

router.get(
  '/',
  SkillsControllers.getAllSkills,
);

router.delete(
  '/:id',
  // auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  SkillsControllers.deleteSkill,
);

export const SkillsRoutes = router;
