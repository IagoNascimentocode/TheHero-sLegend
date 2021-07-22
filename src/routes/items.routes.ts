import { Router } from "express"
import { CreateSwordsController } from "../modules/items/swords/useCases/createSwords/CreateSwordsController";
import { DeleteSwordController } from "../modules/items/swords/useCases/deleteSword/DeleteSwordController";
import { ListAllSwordsController } from "../modules/items/swords/useCases/listAllSwords/ListAllSwordsController";



const itemsRoutes = Router();

const createSwordsController = new CreateSwordsController();
const listAllSwordsController = new ListAllSwordsController();
const deleteSwordController = new DeleteSwordController();

itemsRoutes.post('/', createSwordsController.handle)
itemsRoutes.get('/listAll', listAllSwordsController.handle)
itemsRoutes.delete('/delete', deleteSwordController.handle)

export { itemsRoutes }