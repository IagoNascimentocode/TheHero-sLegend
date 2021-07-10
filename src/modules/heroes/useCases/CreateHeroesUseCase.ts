import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../accounts/repositories/IUsersRepository";
import { ICreateHeroesDTO } from "../dtos/ICreateHeroesDTO";
import { IHeroesRepository } from "../repositories/IHeroesRepository";

@injectable()
class CreateHeroesUseCase {

 constructor(
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository,
  @inject("UsersRepository")
  private usersRepository: IUsersRepository
 ) { }

 async execute({ user_id, name, type, life, damage, strength, armor, agility, intelligence, movementSpeed }: ICreateHeroesDTO): Promise<void> {

  const user = this.usersRepository.findByID(user_id)

  if (!user) {
   throw Error("Users is not exists!")
  }

  await this.heroesRepository.create({ user_id, name, type, life, damage, strength, armor, agility, intelligence, movementSpeed })

 }

}

export { CreateHeroesUseCase }