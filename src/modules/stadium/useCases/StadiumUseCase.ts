import { inject, injectable } from "tsyringe";
import { IHeroesRepository } from "../../heroes/repositories/IHeroesRepository";
import { Hero } from "../../heroes/entities/Hero";
import { IStadiumRepository } from "../repositories/IStadiumRepository";

@injectable()
class StadiumUseCase {
 constructor(
  @inject("StadiumRepository")
  private stadiumRepository: IStadiumRepository
 ) { }

 async basicAttack(user_1: string, user_2: string): Promise<Hero[]> {

  const result = await this.stadiumRepository.basicAttack(user_1, user_2)


  return result

 }
}

export { StadiumUseCase }