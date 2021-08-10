import { getRepository, Repository } from "typeorm";
import { User } from "../../accounts/entities/User";
import { Hero } from "../../heroes/entities/Hero";
import { IStadiumRepository } from "./IStadiumRepository";

class StadiumRepository implements IStadiumRepository {

 private repositoryHero: Repository<Hero>;

 private repositoryUser: Repository<User>;

 constructor() {
  this.repositoryHero = getRepository(Hero)
  this.repositoryUser = getRepository(User)
 }

 async basicAttack(player_1: string, player_2: string): Promise<Hero[]> {

  const user_1 = await this.repositoryUser.findOne(player_1)
  const user_2 = await this.repositoryUser.findOne(player_2)

  const player1 = await this.repositoryHero.findOne(user_1.hero_id);
  const player2 = await this.repositoryHero.findOne(user_2.hero_id);


  if (player1.movementSpeed >= player2.movementSpeed) {

   if (player2.armor <= 0) {
    player2.life = player2.life - player1.damage

   }
   player2.armor = player2.armor - player1.damage

  } else {

   if (player1.armor <= 0) {
    player1.life = player1.life - player2.damage

   }
   player1.armor = player1.armor - player2.damage

  }

  await this.repositoryHero.createQueryBuilder()
   .update()
   .set({ armor: player1.armor, life: player1.life })
   .where("id = :player_1")
   .setParameters({ player_1: user_1.hero_id })
   .execute()

  await this.repositoryHero.createQueryBuilder()
   .update()
   .set({ armor: player2.armor, life: player2.life })
   .where("id = :player_2")
   .setParameters({ player_2: user_2.hero_id })
   .execute()



  return [player1, player2]

 }

}

export { StadiumRepository }