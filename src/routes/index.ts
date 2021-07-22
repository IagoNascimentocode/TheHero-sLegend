import { Router } from 'express';
import { usersRoutes } from './users.routes';
import { heroesRoutes } from './heroes.routes';
import { itemsRoutes } from './items.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/heroes', heroesRoutes);
router.use('/items', itemsRoutes);

export { router };
