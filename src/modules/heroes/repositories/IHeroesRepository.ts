import { ICreateHeroesDTO } from "../dtos/ICreateHeroesDTO";
import { Hero } from "../entities/Hero";

interface IHeroesRepository {
 create(data: ICreateHeroesDTO): Promise<void>
 findByID(id: string): Promise<Hero>
}
export { IHeroesRepository }