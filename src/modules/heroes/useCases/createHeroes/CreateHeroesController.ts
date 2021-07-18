import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateHeroesUseCase } from "./CreateHeroesUseCase";

class CreateHeroesController {
 async handle(request: Request, response: Response): Promise<Response> {

  const { name, type, life, damage, strength, armor, agility, intelligence, movementSpeed } = request.body;

  const createHeroesUseCase = container.resolve(CreateHeroesUseCase)

  await createHeroesUseCase.execute({ name, type, life, damage, strength, armor, agility, intelligence, movementSpeed })

  return response.status(200).send()
 }
}
export { CreateHeroesController }