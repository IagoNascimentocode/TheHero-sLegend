import { getRepository, Repository } from "typeorm";
import { ICreateChestsDTO } from "../dtos/ICreateChestsDTO";
import { Chests } from "../entities/Chests";
import { IChestsRepository } from "./IChestsRepository";

class ChestsRepository implements IChestsRepository {

 private repository: Repository<Chests>

 constructor() {
  this.repository = getRepository(Chests)
 }

 async create({ user_id }: ICreateChestsDTO): Promise<void> {

  const createChest = this.repository.create({ id: user_id })

  await this.repository.save(createChest)

 }

}

export { ChestsRepository }