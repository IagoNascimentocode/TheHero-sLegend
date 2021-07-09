import { ICreateHeroesDTO } from "../dtos/ICreateHeroesDTO";

interface IHeroesRepository {
 create(data: ICreateHeroesDTO): Promise<void>
}
export { IHeroesRepository }