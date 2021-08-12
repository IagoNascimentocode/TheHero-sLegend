import { getRepository, Repository } from "typeorm";
import { ICreateSwordsDTO } from "../dtos/ICreateSwordsDTO";
import { Sword } from "../entities/Sword";
import { ISwordsRepository } from "./ISwordsRepository";


class SwordsRepository implements ISwordsRepository {

  repository: Repository<Sword>

  constructor() {
    this.repository = getRepository(Sword)
  }

  async create({ name, damage, weight, price }: ICreateSwordsDTO): Promise<void> {
    const sword = this.repository.create({ name, damage, weight, price })

    await this.repository.save(sword)
  }

  async listAll(): Promise<Sword[]> {
    const swords = this.repository.find()

    return swords
  }

  async deleteSword(id: string): Promise<void> {
    await this.repository.delete(id)
  }

  async setInShelf(store_id: number, sword_id: string): Promise<void> {
    await this.repository.createQueryBuilder()
      .update()
      .set({ store_id })
      .where("id = :sword_id")
      .setParameters({ sword_id })
      .execute()
  }
}
export { SwordsRepository }