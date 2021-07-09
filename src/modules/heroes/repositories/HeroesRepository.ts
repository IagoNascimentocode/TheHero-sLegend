import { getRepository, Repository } from "typeorm";
import { IHeroesRepository } from "./IHeroesRepository";
import { Hero } from "../entities/Hero";
import { ICreateHeroesDTO } from "../dtos/ICreateHeroesDTO";


class HeroesRepository implements IHeroesRepository {

 private repository: Repository<Hero>;

 constructor() {
  this.repository = getRepository(Hero)
 }
 async create({ user_id, name, type, life, damage, strength, armor, agility, intelligence, movementSpeed }: ICreateHeroesDTO): Promise<void> {

  const hero = this.repository.create({ user_id, name, type, life, damage, strength, armor, agility, intelligence, movementSpeed })

  await this.repository.save(hero)
 }



}
export { HeroesRepository }