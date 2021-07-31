import { Router } from "express";
import { CreateChestsController } from "../modules/chests/UseCases/createChests/CreateChestsController";

const chestsRoutes = Router();

const createChestsController = new CreateChestsController();

chestsRoutes.post('/', createChestsController.handle)

export { chestsRoutes }