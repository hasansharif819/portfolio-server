import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectsControllers } from './projects.controller';
import { ProjectsValidations } from './projects.validation';

const router = express.Router();

router.post(
  '/create-project',
  validateRequest(ProjectsValidations.createProjectsValidationSchema),
  ProjectsControllers.createProject,
);

router.get(
  '/',
  ProjectsControllers.getAllProjects,
);
router.get(
  '/:id',
  ProjectsControllers.getSingleProject,
);

router.patch(
  '/:id',
  validateRequest(ProjectsValidations.updateProjectsValidationSchema),
  ProjectsControllers.updateProject,
);

router.delete(
  '/:id',
  ProjectsControllers.deleteProject,
);

export const ProjectsRoutes = router;
