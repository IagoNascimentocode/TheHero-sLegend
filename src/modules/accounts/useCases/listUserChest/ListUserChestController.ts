import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserChestUseCase } from "./ListUserChestUseCase";


class ListUserChestController {

 async handle(request: Request, response: Response): Promise<Response> {

  const { id } = request.params;

  const listUserChestUseCase = container.resolve(ListUserChestUseCase)

  const chest = await listUserChestUseCase.execute(id)

  return response.json(chest)
 }
}

export { ListUserChestController }