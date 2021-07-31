import { Request, response, Response } from 'express';
import { container } from 'tsyringe';
import { CreateChestsUseCase } from '../../../chests/UseCases/createChests/CreateChestsUseCase';
import { CreateUserUseCase } from './CreateUserUseCase';


class CreateUserController {
 async handle(request: Request, response: Response): Promise<Response> {
  const { name, email, password, birthDate, nationality, city, address, } = request.body;

  const createUserUseCase = container.resolve(CreateUserUseCase);

  const user = await createUserUseCase.execute({ name, email, password, birthDate, nationality, city, address });

  const createChestsUseCase = container.resolve(CreateChestsUseCase)

  createChestsUseCase.execute({ user_id: user.id })


  return response.status(201).send()
 }
}

export { CreateUserController }