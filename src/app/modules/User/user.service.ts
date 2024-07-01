/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import config from '../../config';
import { TUser } from './user.interface';
import { User } from './user.model';

const createAdminIntoDB = async (
  payload: TUser,
) => {
  const userData: Partial<TUser> = {};
  userData.name = payload.name;
  userData.email = payload.email;
  userData.password = payload.password || (config.default_password as string);
  userData.role = 'admin';

  const result = await User.create(userData);
  return result;
};

export const UserServices = {
  createAdminIntoDB,
};
