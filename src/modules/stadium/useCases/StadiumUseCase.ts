import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../accounts/repositories/IUsersRepository";
import { IHeroesRepository } from "../../heroes/repositories/IHeroesRepository";

@injectable()
class StadiumUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository,
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository
 ) { }

 async execute(player_1: string, player_2: string) {
  const player1 = await this.usersRepository.findByID(player_1)
  const player2 = await this.usersRepository.findByID(player_2)

  await this.heroesRepository.basicAttack(player1.hero_id, player2.hero_id)
 }
}

export { StadiumUseCase }