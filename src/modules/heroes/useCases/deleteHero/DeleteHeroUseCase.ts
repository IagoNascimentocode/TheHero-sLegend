import { inject, injectable } from "tsyringe"
import { IHeroesRepository } from "../../repositories/IHeroesRepository"

@injectable()
class DeleteHeroUseCase {

 constructor(
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository
 ) { }

 async execute(id: string): Promise<void> {

  const hero = await this.heroesRepository.findByID(id)

  if (!hero) {
   throw Error("Hero is not exists!")
  }

  await this.heroesRepository.deleteHero(id)
 }
}

export { DeleteHeroUseCase }