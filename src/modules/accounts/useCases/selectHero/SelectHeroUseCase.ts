import { inject, injectable } from "tsyringe";
import { IHeroesRepository } from "../../../heroes/repositories/IHeroesRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class SelectHeroUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository,
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository
 ) { }

 async execute(user_id: string, hero_id: string): Promise<void> {

  const heroes = await this.heroesRepository.listAllHeroes()

  heroes.forEach(async (hero) => {

   if (hero.user_id === null && hero.id === hero_id) {

    this.usersRepository.selectHero(user_id, hero_id)
    this.heroesRepository.setUserInHero(user_id, hero_id)

   }
  })
 }

}

export { SelectHeroUseCase }