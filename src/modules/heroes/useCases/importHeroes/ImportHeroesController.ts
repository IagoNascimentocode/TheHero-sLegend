import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportHeroesUseCase } from "./ImportHeroesUseCase";

class ImportHeroesController {

 async handle(request: Request, response: Response): Promise<Response> {
  const { file } = request;

  const importHeroesUseCase = container.resolve(ImportHeroesUseCase)

  await importHeroesUseCase.execute(file);

  return response.status(201).send()
 }
}

export { ImportHeroesController }