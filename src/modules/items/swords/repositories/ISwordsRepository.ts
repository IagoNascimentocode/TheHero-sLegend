import { ICreateSwordsDTO } from "../dtos/ICreateSwordsDTO";
import { Sword } from "../entities/Sword";

interface ISwordsRepository {
 create({ damage, name, weight, price }: ICreateSwordsDTO): Promise<void>;
 listAll(): Promise<Sword[]>;
 deleteSword(id: string): Promise<void>;
 setInShelf(store_id: number, sword_id: string): Promise<void>;
}
export { ISwordsRepository }