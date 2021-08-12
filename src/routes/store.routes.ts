import { Router } from "express";
import { AddItemsController } from "../modules/stores/useCases/addItems/AddItemsController";
import { CreateStoreController } from "../modules/stores/useCases/createStore/CreateStoreController";
import { ListAllStoreItemsController } from "../modules/stores/useCases/listAllStoreItems/ListAllStoreItemsController";

const storeRoutes = Router();
const createStoreController = new CreateStoreController();
const addItemsController = new AddItemsController();
const listAllStoreItemsController = new ListAllStoreItemsController();

storeRoutes.post('/create', createStoreController.handle)
storeRoutes.post('/addItems', addItemsController.handle)
storeRoutes.get('/allItems', listAllStoreItemsController.handle)

export { storeRoutes }