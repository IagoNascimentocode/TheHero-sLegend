import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListByIDUserUseCase } from "./ListByIDUserUseCase";

class ListByIdUserController {

 async handle(request: Request, response: Response): Promise<Response> {

  const { id } = request.params;

  const listByIDUserUseCase = container.resolve(ListByIDUserUseCase)

  const user = await listByIDUserUseCase.execute(id)

  return response.json(user)
 }
}

export { ListByIdUserController }