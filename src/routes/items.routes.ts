import { Router } from "express"
import { CreateSwordsController } from "../modules/items/swords/useCases/createSwords/CreateSwordsController";
import { DeleteSwordController } from "../modules/items/swords/useCases/deleteSword/DeleteSwordController";
import { ListAllSwordsController } from "../modules/items/swords/useCases/listAllSwords/ListAllSwordsController";

import { CreateArmorController } from "../modules/items/armor/useCases/createArmor/CreateArmorController";
import { ListAllArmorController } from "../modules/items/armor/useCases/listAllArmor/ListAllArmorController";
import { DeleteArmorController } from "../modules/items/armor/useCases/DeleteArmor/DeleteArmorController";


const itemsRoutes = Router();

const createSwordsController = new CreateSwordsController();
const listAllSwordsController = new ListAllSwordsController();
const deleteSwordController = new DeleteSwordController();

itemsRoutes.post('/createSword', createSwordsController.handle)
itemsRoutes.get('/listAllSword', listAllSwordsController.handle)
itemsRoutes.delete('/deleteSword', deleteSwordController.handle)

const createArmorController = new CreateArmorController();
const listAllArmorController = new ListAllArmorController();
const deleteArmorController = new DeleteArmorController();

itemsRoutes.post('/createArmor', createArmorController.handle)
itemsRoutes.get('/listAllArmor', listAllArmorController.handle)
itemsRoutes.delete('/deleteArmor', deleteArmorController.handle)

export { itemsRoutes }