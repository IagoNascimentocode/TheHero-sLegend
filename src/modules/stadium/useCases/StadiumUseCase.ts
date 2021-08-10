import { inject, injectable } from "tsyringe";
import { IHeroesRepository } from "../../heroes/repositories/IHeroesRepository";
import { Hero } from "../../heroes/entities/Hero";

@injectable()
class StadiumUseCase {
 constructor(
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository
 ) { }

 async basicAttack(player_1: string, player_2: string): Promise<Hero[]> {

  const result = await this.heroesRepository.basicAttack(player_1, player_2)


  return result

 }
}

export { StadiumUseCase }