import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddCashUseCase } from "./AddCashUseCase";


class AddCashController {

 async handle(request: Request, response: Response): Promise<Response> {
  const { hero_id, cash } = request.body;

  const addCashUseCase = container.resolve(AddCashUseCase)

  await addCashUseCase.execute(hero_id, cash)

  return response.status(200).send()
 }
}

export { AddCashController }