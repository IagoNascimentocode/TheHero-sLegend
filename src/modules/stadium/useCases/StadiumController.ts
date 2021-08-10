import { Request, Response } from "express";
import { container } from "tsyringe";
import { StadiumUseCase } from "./StadiumUseCase";

class StadiumController {

 async handle(request: Request, response: Response): Promise<Response> {
  const { player_1, player_2 } = request.body;

  const stadiumUseCase = container.resolve(StadiumUseCase)

  const result = await stadiumUseCase.basicAttack(player_1, player_2)


  return response.status(200).json(result).send()

 }
}
export { StadiumController }