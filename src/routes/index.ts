import { Router } from 'express';
import { usersRoutes } from './users.routes';
import { heroesRoutes } from './heroes.routes';
import { itemsRoutes } from './items.routes';
import { chestsRoutes } from './chests.routes';
import { stadiumRouter } from './stadium.routes';
import { storeRoutes } from './store.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/heroes', heroesRoutes);
router.use('/items', itemsRoutes);
router.use('/chests', chestsRoutes);
router.use('/stadium', stadiumRouter)
router.use('/store', storeRoutes)

export { router };
