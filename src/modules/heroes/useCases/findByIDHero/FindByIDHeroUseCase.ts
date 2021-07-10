import { inject, injectable } from "tsyringe";
import { Hero } from "../../entities/Hero";
import { IHeroesRepository } from "../../repositories/IHeroesRepository";

@injectable()
class FindByIDHeroUseCase {

 constructor(
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository
 ) { }

 async execute(id: string): Promise<Hero> {

  const hero = this.heroesRepository.findByID(id)

  if (!hero) {
   throw Error("Hero is not exists!")
  }

  return hero
 }
}
export { FindByIDHeroUseCase }