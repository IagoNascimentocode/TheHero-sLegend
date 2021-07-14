import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListAllHeroesUseCase } from "./ListAllHeroesUseCase"


class ListAllHeroesController {
 async handle(request: Request, response: Response): Promise<Response> {

  const listAllHeroesUseCase = container.resolve(ListAllHeroesUseCase)

  const heroes = await listAllHeroesUseCase.execute()

  return response.json(heroes)
 }
}

export { ListAllHeroesController }