import { Router } from "express"
import { CreateHeroesController } from "../modules/heroes/useCases/createHeroes/CreateHeroesController";
import { DeleteHeroController } from "../modules/heroes/useCases/deleteHero/DeleteHeroContrller";
import { FindByIDHeroController } from "../modules/heroes/useCases/findByIDHero/FindByIDHeroController";
import { ListAllHeroesController } from "../modules/heroes/useCases/listAllHeroes/ListAllHeroesController";
import { ListHeroAndUserByUserIDController } from "../modules/heroes/useCases/listHeroAndUserByUserID/ListHeroAndUserByUserIDController";





const heroesRoutes = Router();

const createHeroesController = new CreateHeroesController();
const findByIDHeroController = new FindByIDHeroController();
const listHeroAndUserByUserIDController = new ListHeroAndUserByUserIDController();
const deleteHeroController = new DeleteHeroController();
const listAllHeroesController = new ListAllHeroesController();


heroesRoutes.post('/:id', createHeroesController.handle)
heroesRoutes.get('/listAll', listAllHeroesController.handle)
heroesRoutes.get('/findByID/:id', findByIDHeroController.handle)
heroesRoutes.get('/listHeroAndUser/:id', listHeroAndUserByUserIDController.handle)
heroesRoutes.delete('/deleteHero', deleteHeroController.handle)

export { heroesRoutes }