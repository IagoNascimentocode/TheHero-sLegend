import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIDUserUseCase } from "./FindByIDUserUseCase";


class FindByIdUserController {

 async handle(request: Request, response: Response): Promise<Response> {

  const { id } = request.params;

  const findByIDUserUseCase = container.resolve(FindByIDUserUseCase)

  const user = await findByIDUserUseCase.execute(id)

  return response.json(user)
 }
}

export { FindByIdUserController }