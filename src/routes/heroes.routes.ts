import { Router } from "express"
import { CreateHeroesController } from "../modules/heroes/useCases/createHeroes/CreateHeroesController";
import { FindByIDHeroController } from "../modules/heroes/useCases/findByIDHero/FindByIDHeroController";

const heroesRoutes = Router();

const createHeroesController = new CreateHeroesController()
const findByIDHeroController = new FindByIDHeroController()


heroesRoutes.post('/', createHeroesController.handle)
heroesRoutes.get('/findByID/:id', findByIDHeroController.handle)

export { heroesRoutes }