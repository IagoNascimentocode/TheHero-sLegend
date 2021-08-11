import { inject, injectable } from "tsyringe";
import { IChestsRepository } from "../../../chests/repositories/IChestsRepository";
import { IHeroesRepository } from "../../../heroes/repositories/IHeroesRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class DeleteUserUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository,
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository,
  @inject("ChestsRepository")
  private chestsRepository: IChestsRepository
 ) { }

 async execute(id: string): Promise<void> {
  const user = await this.usersRepository.findByID(id)

  if (!user) {
   throw Error("User is not exists!")
  }

  const hero = await this.heroesRepository.listHeroAndUserByUserID(id)

  if (hero) {

   hero.forEach(async (hero) => {

    await this.heroesRepository.deleteHero(hero.id)

   })
  }
  const chest = await this.chestsRepository.findChestsByID(user.chests_id)

  if (chest) {

   await this.chestsRepository.delete(chest.id)

  }

  await this.usersRepository.deleteUser(id)

 }

}

export { DeleteUserUseCase }