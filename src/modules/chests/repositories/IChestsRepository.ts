import { ICreateChestsDTO } from "../dtos/ICreateChestsDTO";

interface IChestsRepository {
 create({ user_id }: ICreateChestsDTO): Promise<void>
}

export { IChestsRepository }