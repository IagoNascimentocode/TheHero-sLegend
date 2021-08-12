import { Router } from "express";
import { CreateStoreController } from "../modules/stores/useCases/createStore/CreateStoreController";

const createStoreController = new CreateStoreController();

const storeRoutes = Router();

storeRoutes.post('/create', createStoreController.handle)

export { storeRoutes }