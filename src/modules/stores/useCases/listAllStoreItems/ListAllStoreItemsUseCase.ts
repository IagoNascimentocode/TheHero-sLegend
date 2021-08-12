import { inject, injectable } from "tsyringe";
import { Store } from "../../entities/Store";
import { IStoreRepository } from "../../repositories/IStoreRepository";

@injectable()
class ListAllStoreItemsUseCase {

 constructor(
  @inject("StoreRepository")
  private storeRepository: IStoreRepository,
 ) { }

 async execute(store_id: number): Promise<Store[]> {

  const items = await this.storeRepository.listAllStoreItems(store_id)

  return items
 }
}

export { ListAllStoreItemsUseCase }