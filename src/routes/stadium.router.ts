import { Router } from 'express';
import { StadiumController } from '../modules/stadium/useCases/StadiumController';

const stadiumRouter = Router()

const stadiumController = new StadiumController();

stadiumRouter.get('/basicAttack', stadiumController.handle)

export { stadiumRouter }