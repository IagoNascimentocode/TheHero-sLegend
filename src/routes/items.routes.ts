import { Router } from "express"
import { CreateSwordsController } from "../modules/items/swords/useCases/createSwords/CreateSwordsController";
import { ListAllSwordsController } from "../modules/items/swords/useCases/listAllSwords/ListAllSwordsController";



const itemsRoutes = Router();

const createSwordsController = new CreateSwordsController();
const listAllSwordsController = new ListAllSwordsController();

itemsRoutes.post('/', createSwordsController.handle)
itemsRoutes.get('/listAll', listAllSwordsController.handle)

export { itemsRoutes }