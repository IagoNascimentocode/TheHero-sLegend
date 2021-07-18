import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../accounts/repositories/IUsersRepository";
import { ICreateHeroesDTO } from "../../dtos/ICreateHeroesDTO";
import { IHeroesRepository } from "../../repositories/IHeroesRepository";

@injectable()
class CreateHeroesUseCase {

 constructor(
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository,
  @inject("UsersRepository")
  private usersRepository: IUsersRepository
 ) { }

 async execute({ name, type, life, damage, strength, armor, agility, intelligence, movementSpeed }: ICreateHeroesDTO): Promise<void> {


  await this.heroesRepository.create({
   name, type, life, damage, strength, armor, agility, intelligence, movementSpeed
  })

 }
}

export { CreateHeroesUseCase }