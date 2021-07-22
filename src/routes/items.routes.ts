import { Router } from "express"
import { CreateSwordsController } from "../modules/items/swords/useCases/createSwords/CreateSwordsController";



const itemsRoutes = Router();

const createSwordsController = new CreateSwordsController();

itemsRoutes.post('/', createSwordsController.handle)

export { itemsRoutes }