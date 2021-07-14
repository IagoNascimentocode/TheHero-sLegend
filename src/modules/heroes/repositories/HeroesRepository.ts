import { getRepository, QueryBuilder, Repository } from "typeorm";
import { IHeroesRepository } from "./IHeroesRepository";
import { ICreateHeroesDTO } from "../dtos/ICreateHeroesDTO";
import { Hero } from "../entities/Hero";


class HeroesRepository implements IHeroesRepository {

 private repository: Repository<Hero>;

 constructor() {
  this.repository = getRepository(Hero)
 }

 async create({ user_id, name, type, life, damage, strength, armor, agility, intelligence, movementSpeed }: ICreateHeroesDTO): Promise<Hero> {

  const hero = this.repository.create({ user_id, name, type, life, damage, strength, armor, agility, intelligence, movementSpeed })

  await this.repository.save(hero)

  return hero
 }

 async findByID(id: string): Promise<Hero> {

  const hero = await this.repository.findOne(id)

  return hero
 }

 async listHeroAndUserByUserID(user_id: string): Promise<Hero[]> {

  const hero = await this.repository.find({
   where: { user_id },
   relations: ["user"]
  })

  return hero
 }

 async deleteHero(id: string): Promise<void> {

  await this.repository.delete(id)
 }
}
export { HeroesRepository }