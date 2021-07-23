import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllArmorUseCase } from "./ListAllArmorUseCase";

class ListAllArmorController {

 async handle(request: Request, response: Response): Promise<Response> {

  const listAllArmorUseCase = container.resolve(ListAllArmorUseCase)

  const listArmor = await listAllArmorUseCase.execute()

  return response.json(listArmor)

 }
}

export { ListAllArmorController }