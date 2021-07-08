import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


class UpdateUserController {

 async handle(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;
  const { name, address, city, nationality } = request.body;

  const updateUserUseCase = container.resolve(UpdateUserUseCase)

  await updateUserUseCase.execute(id, name, city, address, nationality)


  return response.status(201).send()
 }


}

export { UpdateUserController }