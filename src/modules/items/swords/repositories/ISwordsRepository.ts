import { ICreateSwordsDTO } from "../dtos/ICreateSwordsDTO";

interface ISwordsRepository {
 create(data: ICreateSwordsDTO): Promise<void>;
}
export { ISwordsRepository }