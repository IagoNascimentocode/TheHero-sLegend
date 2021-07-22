import { ICreateSwordsDTO } from "../dtos/ICreateSwordsDTO";
import { Sword } from "../entities/Sword";

interface ISwordsRepository {
 create(data: ICreateSwordsDTO): Promise<void>;
 listAll(): Promise<Sword[]>;
}
export { ISwordsRepository }