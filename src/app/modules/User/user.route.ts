/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { USER_ROLE } from './user.constant';
import { UserControllers } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-admin',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createAdmin,
);

router.get(
  '/',
  UserControllers.getAllAdmins,
);

router.delete(
  '/:id',
  UserControllers.deleteAdmin,
);

export const UserRoutes = router;
