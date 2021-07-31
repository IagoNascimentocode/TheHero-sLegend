import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateChestsUseCase } from "./CreateChestsUseCase";

class CreateChestsController {

 async handle(request: Request, response: Response): Promise<Response> {

  const { id } = request.params;

  const createChestsUseCase = container.resolve(CreateChestsUseCase)

  await createChestsUseCase.execute({ user_id: id })

  return response.status(201).send()
 }
}
export { CreateChestsController }