import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStoreUseCase } from "./CreateStoreUseCase";

class CreateStoreController {

 async handle(request: Request, response: Response): Promise<Response> {
  const { id, name } = request.body;

  const createStoreUseCase = container.resolve(CreateStoreUseCase)

  await createStoreUseCase.execute(id, name)

  return response.status(201).send()
 }
}

export { CreateStoreController }