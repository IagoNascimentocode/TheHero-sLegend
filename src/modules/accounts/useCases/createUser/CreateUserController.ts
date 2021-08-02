import { Request, response, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';


class CreateUserController {
 async handle(request: Request, response: Response): Promise<Response> {
  const { name, email, password, birthDate, nationality, city, address, } = request.body;

  const createUserUseCase = container.resolve(CreateUserUseCase);

  await createUserUseCase.execute({ name, email, password, birthDate, nationality, city, address });

  return response.status(201).send()
 }
}

export { CreateUserController }