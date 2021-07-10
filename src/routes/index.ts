import { Router } from 'express';
import { heroesRoutes } from './heroes.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/heroes', heroesRoutes)

export { router };
