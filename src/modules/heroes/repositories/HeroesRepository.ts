import { getRepository, QueryBuilder, Repository } from "typeorm";
import { IHeroesRepository } from "./IHeroesRepository";
import { ICreateHeroesDTO } from "../dtos/ICreateHeroesDTO";
import { Hero } from "../entities/Hero";


class HeroesRepository implements IHeroesRepository {

  repository: Repository<Hero>;

  constructor() {
    this.repository = getRepository(Hero)
  }

  async create({ name, type, life, damage, strength, armor, agility, intelligence, movementSpeed }: ICreateHeroesDTO): Promise<void> {

    const hero = this.repository.create({ name, type, life, damage, strength, armor, agility, intelligence, movementSpeed })

    await this.repository.save(hero)

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

  async listAllHeroes(): Promise<Hero[]> {

    const heroes = await this.repository.find()

    return heroes
  }

  async setUserInHero(user_id: string, hero_id: string): Promise<void> {
    await this.repository.createQueryBuilder()
      .update()
      .set({ user_id })
      .where("id = :hero_id")
      .setParameters({ hero_id })
      .execute()
  }

  async addCash(hero_id: string, cash: number): Promise<void> {

    await this.repository.createQueryBuilder()
      .update()
      .set({ cash })
      .where("id = :hero_id")
      .setParameters({ hero_id })
      .execute()

  }

  async deleteHero(id: string): Promise<void> {

    await this.repository.delete(id)
  }
}
export { HeroesRepository }