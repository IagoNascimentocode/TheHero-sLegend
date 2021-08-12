import { inject, injectable } from "tsyringe";
import { IArmorRepository } from "../../../items/armor/repositories/IArmorRepository";
import { ISwordsRepository } from "../../../items/swords/repositories/ISwordsRepository";
import { IStoreRepository } from "../../repositories/IStoreRepository";

@injectable()
class AddItemsUseCase {

 constructor(
  @inject("StoreRepository")
  private storeRepository: IStoreRepository,
  @inject("ArmorRepository")
  private armorRepository: IArmorRepository,
  @inject("SwordsRepository")
  private swordsRepository: ISwordsRepository
 ) { }

 async execute(store_id: number, armor_id: string, sword_id: string): Promise<void> {

  await this.storeRepository.addItems(store_id, armor_id, sword_id)

  await this.armorRepository.setInShelf(store_id, armor_id)

  await this.swordsRepository.setInShelf(store_id, sword_id)

 }
}
export { AddItemsUseCase }