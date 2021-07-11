import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListHeroAndUserByUserIDUseCase } from "./ListHeroAndUserByUserIDUseCase";




class ListHeroAndUserByUserIDController {
 async handle(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  const listHeroAndUserByUserIDUseCase = container.resolve(ListHeroAndUserByUserIDUseCase)

  const heroAndUser = await listHeroAndUserByUserIDUseCase.execute(id)

  return response.json(heroAndUser)
 }
}

export { ListHeroAndUserByUserIDController }