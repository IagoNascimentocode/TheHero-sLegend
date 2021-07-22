import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllSwordsUseCase } from "./ListAllSwordsUseCase";

class ListAllSwordsController {
 async handle(request: Request, response: Response): Promise<Response> {

  const listAllSwordsUseCase = container.resolve(ListAllSwordsUseCase)

  const swords = await listAllSwordsUseCase.execute()

  return response.json(swords)
 }
}

export { ListAllSwordsController }