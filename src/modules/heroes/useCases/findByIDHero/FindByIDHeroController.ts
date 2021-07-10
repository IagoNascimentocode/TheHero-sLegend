import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIDHeroUseCase } from "./FindByIDHeroUseCase";

class FindByIDHeroController {
 async handle(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  const findByIDHeroUseCase = container.resolve(FindByIDHeroUseCase)

  const hero = await findByIDHeroUseCase.execute(id)

  return response.json(hero)
 }
}

export { FindByIDHeroController }