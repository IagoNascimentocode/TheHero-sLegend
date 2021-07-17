import { inject, injectable } from "tsyringe";
import { IHeroesRepository } from "../../repositories/IHeroesRepository";

@injectable()
class AddCashUseCase {

 constructor(
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository
 ) { }

 async execute(hero_id: string, cash: number): Promise<void> {

  const hero = await this.heroesRepository.findByID(hero_id)

  const totalCash = hero.cash + cash

  if (!hero) {
   throw Error("Hero is not exists")
  }

  await this.heroesRepository.addCash(hero_id, totalCash)

 }
}

export { AddCashUseCase }