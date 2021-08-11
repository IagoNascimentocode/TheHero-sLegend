import { getRepository, Repository } from "typeorm";
import { ICreateChestsDTO } from "../dtos/ICreateChestsDTO";
import { Chests } from "../entities/Chests";
import { IChestsRepository } from "./IChestsRepository";

class ChestsRepository implements IChestsRepository {

  private repository: Repository<Chests>

  constructor() {
    this.repository = getRepository(Chests)
  }

  async create({ user_id }: ICreateChestsDTO): Promise<Chests> {

    const chest = this.repository.create({ user_id: user_id })

    await this.repository.save(chest)

    return chest
  }
  findChestsByID(id: string): Promise<Chests> {
    const chest = this.repository.findOne(id)

    return chest
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}

export { ChestsRepository }
