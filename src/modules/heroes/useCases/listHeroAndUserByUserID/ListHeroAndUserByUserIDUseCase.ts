import { inject, injectable } from "tsyringe";
import { Hero } from "../../entities/hero";
import { IHeroesRepository } from "../../repositories/IHeroesRepository";

@injectable()
class ListHeroAndUserByUserIDUseCase {

 constructor(
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository
 ) { }

 async execute(user_id: string): Promise<Hero[]> {

  const heroAndUser = await this.heroesRepository.listHeroAndUserByUserID(user_id)

  if (heroAndUser.length === 0) {
   throw Error("User is not exists or not have one hero")
  }

  return heroAndUser
 }
}

export { ListHeroAndUserByUserIDUseCase }