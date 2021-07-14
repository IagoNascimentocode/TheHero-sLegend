import { inject, injectable } from "tsyringe";
import { IHeroesRepository } from "../../repositories/IHeroesRepository";

@injectable()
class ListAllHeroesUseCase {

 constructor(
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository
 ) { }

 async execute() {
  return this.heroesRepository.listAllHeroes()
 }
}

export { ListAllHeroesUseCase }