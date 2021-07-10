import { Router } from "express"
import { CreateHeroesController } from "../modules/heroes/useCases/CreateHeroesController";

const heroesRoutes = Router();

const createHeroesController = new CreateHeroesController()

heroesRoutes.post('/', createHeroesController.handle)

export { heroesRoutes }