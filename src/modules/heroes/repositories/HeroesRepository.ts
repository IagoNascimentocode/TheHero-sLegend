import { createQueryBuilder, getRepository, QueryBuilder, Repository } from "typeorm";
import { EventEmitter } from "typeorm/platform/PlatformTools";
import { IHeroesRepository } from "./IHeroesRepository";
import { ICreateHeroesDTO } from "../dtos/ICreateHeroesDTO";
import { Hero } from "../entities/Hero";


class HeroesRepository implements IHeroesRepository {

  private repository: Repository<Hero>;

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

  async basicAttack(player_1: string, player_2: string): Promise<Hero[]> {
    const player1 = await this.repository.findOne(player_1);
    const player2 = await this.repository.findOne(player_2);


    if (player1.movementSpeed >= player2.movementSpeed) {

      if (player2.armor <= 0) {

        player2.life = player2.life - player1.damage
      }

      player2.armor = player2.armor - player1.damage

    } else {

      if (player1.armor <= 0) {
        player1.armor = player1.life - player2.damage

      }

      player1.armor = player1.armor - player2.damage

    }

    await this.repository.createQueryBuilder()
      .update()
      .set({ armor: player1.armor })
      .where("id = :player_1")
      .setParameters({ player_1 })
      .execute()

    await this.repository.createQueryBuilder()
      .update()
      .set({ armor: player2.armor })
      .where("id = :player_2")
      .setParameters({ player_2 })
      .execute()



    return [player1, player2]
    console.log(player2, player1)
  }

}
export { HeroesRepository }