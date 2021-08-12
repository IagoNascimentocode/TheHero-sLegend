import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddItemsUseCase } from "./AddItemsUseCase";

class AddItemsController {

 async handle(request: Request, response: Response): Promise<Response> {
  const { store_id, armor_id, sword_id } = request.body
  const addItemsUseCase = container.resolve(AddItemsUseCase)

  await addItemsUseCase.execute(store_id, armor_id, sword_id)

  return response.status(200).send()
 }
}

export { AddItemsController }