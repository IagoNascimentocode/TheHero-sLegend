import { inject, injectable } from "tsyringe";
import { IHeroesRepository } from "../../../heroes/repositories/IHeroesRepository";
import { FindByIDHeroUseCase } from "../../../heroes/useCases/findByIDHero/FindByIDHeroUseCase";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class DeleteUserUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository,
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository
 ) { }

 async execute(id: string) {
  const user = this.usersRepository.findByID(id)

  if (!user) {
   throw Error("User is not exists!")
  }

  const hero = await this.heroesRepository.listHeroAndUserByUserID(id)

  if (hero) {

   hero.forEach(async (hero) => {

    await this.heroesRepository.deleteHero(hero.id)

   })
  }

  await this.usersRepository.deleteUser(id)

 }

}

export { DeleteUserUseCase }