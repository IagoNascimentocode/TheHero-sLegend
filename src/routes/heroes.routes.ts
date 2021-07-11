import { Router } from "express"
import { CreateHeroesController } from "../modules/heroes/useCases/createHeroes/CreateHeroesController";
import { FindByIDHeroController } from "../modules/heroes/useCases/findByIDHero/FindByIDHeroController";
import { ListHeroAndUserByUserIDController } from "../modules/heroes/useCases/listHeroAndUserByUserID/ListHeroAndUserByUserIDController";




const heroesRoutes = Router();

const createHeroesController = new CreateHeroesController()
const findByIDHeroController = new FindByIDHeroController()
const listHeroAndUserByUserIDController = new ListHeroAndUserByUserIDController()


heroesRoutes.post('/:id', createHeroesController.handle)
heroesRoutes.get('/findByID/:id', findByIDHeroController.handle)
heroesRoutes.get('/listHeroAndUser/:id', listHeroAndUserByUserIDController.handle)

export { heroesRoutes }