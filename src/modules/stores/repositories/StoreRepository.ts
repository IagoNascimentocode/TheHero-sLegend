import { getRepository, Repository } from "typeorm";
import { Store } from "../entities/Store";
import { IStoreRepository } from "./IStoreRepository";


class StoreRepository implements IStoreRepository {

 private repository: Repository<Store>;

 constructor() {
  this.repository = getRepository(Store)
 }

 async create(id: number, name: string): Promise<Store> {

  const store = this.repository.create({ id, name })

  await this.repository.save(store)

  return store
 }

}

export { StoreRepository }