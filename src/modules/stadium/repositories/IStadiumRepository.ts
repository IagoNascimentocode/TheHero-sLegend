import { Hero } from "../../heroes/entities/Hero";

interface IStadiumRepository {
 basicAttack(player_1: string, player_2: string): Promise<Hero[]>;
}

export { IStadiumRepository }