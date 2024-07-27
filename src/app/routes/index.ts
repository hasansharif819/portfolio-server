import { Router } from 'express';
import { ProjectsRoutes } from '../modules/Projects/projects.route';
import { SkillsRoutes } from '../modules/Skills/skills.route';
import { UserRoutes } from '../modules/User/user.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { BlogsRoutes } from '../modules/Blogs/blogs.route';
import { ExperienceRoutes } from '../modules/Experience/experience.route';
import { ContactRoutes } from '../modules/Contact/contact.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/skills',
    route: SkillsRoutes,
  },
  {
    path: '/projects',
    route: ProjectsRoutes,
  },
  {
    path: '/blogs',
    route: BlogsRoutes,
  },
  {
    path: '/experience',
    route: ExperienceRoutes,
  },
  {
    path: '/contact',
    route: ContactRoutes
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
