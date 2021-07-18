import { Request, Response } from "express";
import { container } from "tsyringe";
import { SelectHeroUseCase } from "./SelectHeroUseCase";

class SelectHeroController {

 async handle(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  const { hero_id } = request.body;

  const selectHeroUseCase = container.resolve(SelectHeroUseCase)

  selectHeroUseCase.execute(id, hero_id)

  return response.status(200).send()
 }
}

export { SelectHeroController }