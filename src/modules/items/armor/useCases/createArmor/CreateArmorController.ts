import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateArmorUseCase } from "./CreateArmorUseCase";

class CreateArmorController {

 async handle(request: Request, response: Response): Promise<Response> {

  const { name, armor, weight } = request.body

  const createArmorUseCase = container.resolve(CreateArmorUseCase)

  await createArmorUseCase.execute({ name, armor, weight })

  return response.status(201).send()
 }
}

export { CreateArmorController }