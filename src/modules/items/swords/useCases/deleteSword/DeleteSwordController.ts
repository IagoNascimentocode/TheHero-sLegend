import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteSwordUseCase } from "./DeleteSwordUseCase";

class DeleteSwordController {

 async handle(request: Request, response: Response): Promise<Response> {
  const { id } = request.body;

  const deleteSwordUseCase = container.resolve(DeleteSwordUseCase)

  await deleteSwordUseCase.execute(id)

  return response.status(200).send()
 }
}

export { DeleteSwordController }