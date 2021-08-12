import { getRepository, Repository } from "typeorm";
import { Store } from "../entities/Store";
import { IStoreRepository } from "./IStoreRepository";


class StoreRepository implements IStoreRepository {

  private repository: Repository<Store>;

  constructor() {
    this.repository = getRepository(Store)
  }

  async create(id: number, name: string): Promise<void> {

    const store = this.repository.create({ id, name })

    await this.repository.save(store)

  }

  async findAllStore(): Promise<Store[]> {
    const stores = await this.repository.find()

    return stores
  }

  async findByID(id: number): Promise<Store> {
    const store = await this.repository.findOne(id)

    return store
  }

  async listAllStoreItems(store_id: number): Promise<Store[]> {
    const items = await this.repository.find({
      where: { id: store_id },
      relations: ["armor", "sword"]
    })

    return items
  }

  async addItems(store_id: number, armor_id: string, sword_id: string): Promise<void> {

    await this.repository.createQueryBuilder()
      .update()
      .set({ shelf_from_armor: armor_id, shelf_from_sword: sword_id })
      .where("id = :store_id")
      .setParameters({ store_id })
      .execute()

  }


}
export { StoreRepository }