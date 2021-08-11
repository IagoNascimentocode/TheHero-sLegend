import { ICreateChestsDTO } from "../dtos/ICreateChestsDTO";
import { Chests } from "../entities/Chests";

interface IChestsRepository {
 create({ user_id }: ICreateChestsDTO): Promise<Chests>;
 findChestsByID(id: string): Promise<Chests>
 delete(id: string): Promise<void>;
}

export { IChestsRepository }