import { getRepository, Repository } from "typeorm"
import { ICreateArmorDTO } from "../dtos/ICreateArmorDTO"
import { Armor } from "../entities/Armor"
import { IArmorRepository } from "./IArmorRepository"

class ArmorRepository implements IArmorRepository {

  private repository: Repository<Armor>

  constructor() {

    this.repository = getRepository(Armor)

  }
  async create({ name, armor, weight, price }: ICreateArmorDTO): Promise<void> {
    const _armor = this.repository.create({ name, armor, weight, price })

    await this.repository.save(_armor)
  }

  async findAll(): Promise<Armor[]> {
    const armor = await this.repository.find()

    return armor
  }

  async deleteArmor(id: string): Promise<void> {
    await this.repository.delete(id)
  }

  async setInShelf(store_id: number, armor_id: string): Promise<void> {
    await this.repository.createQueryBuilder()
      .update()
      .set({ store_id })
      .where("id = :armor_id")
      .setParameters({ armor_id })
      .execute()
  }

}

export { ArmorRepository }