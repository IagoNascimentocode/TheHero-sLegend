import { ICreateHeroesDTO } from "../dtos/ICreateHeroesDTO";
import { Hero } from "../entities/Hero";

interface IHeroesRepository {
 create(data: ICreateHeroesDTO): Promise<Hero>;
 findByID(id: string): Promise<Hero>;
 listHeroAndUserByUserID(user_id: string): Promise<Hero[]>;
}
export { IHeroesRepository }