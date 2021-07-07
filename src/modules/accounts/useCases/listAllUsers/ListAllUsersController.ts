import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListAllUsersUseCase } from "./ListAllUsersUseCase"


class ListAllUsersController {

 async handle(request: Request, response: Response): Promise<Response> {

  const listAllUsersUseCase = container.resolve(ListAllUsersUseCase)

  const all = await listAllUsersUseCase.execute()

  return response.json(all)
 }
}

export { ListAllUsersController }