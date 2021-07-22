import { getRepository, Repository } from "typeorm";
import { ICreateSwordsDTO } from "../dtos/ICreateSwordsDTO";
import { Sword } from "../entities/Sword";
import { ISwordsRepository } from "./ISwordsRepository";


class SwordsRepository implements ISwordsRepository {

 repository: Repository<Sword>

 constructor() {
  this.repository = getRepository(Sword)
 }

 async create({ name, damage, weight }: ICreateSwordsDTO): Promise<void> {
  const sword = this.repository.create({ name, damage, weight })

  await this.repository.save(sword)
 }

 async listAll(): Promise<Sword[]> {
  const swords = this.repository.find()

  return swords
 }

}
export { SwordsRepository }