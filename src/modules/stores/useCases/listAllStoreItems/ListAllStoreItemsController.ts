import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllStoreItemsUseCase } from "./ListAllStoreItemsUseCase";


class ListAllStoreItemsController {

 async handle(request: Request, response: Response): Promise<Response> {
  const { store_id } = request.body;

  const listAllStoreItemsUseCase = container.resolve(ListAllStoreItemsUseCase)

  const items = await listAllStoreItemsUseCase.execute(store_id)

  return response.json(items)
 }
}

export { ListAllStoreItemsController }
