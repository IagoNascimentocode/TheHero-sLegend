import { Request, Response } from "express";
import { container } from "tsyringe";
import { StadiumUseCase } from "./StadiumUseCase";

class StadiumController {

 async handle(request: Request, response: Response): Promise<Response> {

  const { player_1, player_2 } = request.body;

  const stadiumUseCase = container.resolve(StadiumUseCase)

  await stadiumUseCase.execute(player_1, player_2)

  return response.status(200).send()

 }
}
export { StadiumController }