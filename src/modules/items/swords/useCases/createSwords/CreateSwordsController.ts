import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSwordsUseCase } from "./CreateSwordsUseCase";

class CreateSwordsController {
 async handle(request: Request, response: Response): Promise<Response> {
  const { name, damage, weight } = request.body;

  const createSwordsUseCase = container.resolve(CreateSwordsUseCase)

  await createSwordsUseCase.execute({ name, damage, weight })

  return response.status(201).send()
 }
}

export { CreateSwordsController }