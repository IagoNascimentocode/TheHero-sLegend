import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteHeroUseCase } from "./DeleteHeroUseCase";

class DeleteHeroController {

 async handle(request: Request, response: Response): Promise<Response> {

  const { id } = request.body;

  const deleteHeroUseCase = container.resolve(DeleteHeroUseCase)

  await deleteHeroUseCase.execute(id)

  return response.status(200).send()
 }
}

export { DeleteHeroController }