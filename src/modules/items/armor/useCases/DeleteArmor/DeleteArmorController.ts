import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteArmorUseCase } from "./DeleteArmorUseCase";

class DeleteArmorController {

 async handle(request: Request, response: Response): Promise<Response> {

  const { id } = request.body

  const deleteArmorUseCase = container.resolve(DeleteArmorUseCase)

  await deleteArmorUseCase.execute(id)

  return response.status(200).send()
 }
}

export { DeleteArmorController }