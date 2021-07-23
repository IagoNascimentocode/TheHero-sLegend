import { inject, injectable } from "tsyringe";
import { Armor } from "../../entities/Armor";
import { IArmorRepository } from "../../repositories/IArmorRepository";

@injectable()
class ListAllArmorUseCase {

 constructor(
  @inject("ArmorRepository")
  private armorRepository: IArmorRepository
 ) { }

 async execute(): Promise<Armor[]> {

  const armor = await this.armorRepository.findAll()

  return armor
 }
}

export { ListAllArmorUseCase }