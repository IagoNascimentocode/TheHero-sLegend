import { Router } from 'express';
import { usersRoutes } from './users.routes';
import { heroesRoutes } from './heroes.routes';
import { itemsRoutes } from './items.routes';
import { chestsRoutes } from './chests.router';
import { stadiumRouter } from './stadium.router';

const router = Router();

router.use('/users', usersRoutes);
router.use('/heroes', heroesRoutes);
router.use('/items', itemsRoutes);
router.use('/chests', chestsRoutes);
router.use('/stadium', stadiumRouter)

export { router };
