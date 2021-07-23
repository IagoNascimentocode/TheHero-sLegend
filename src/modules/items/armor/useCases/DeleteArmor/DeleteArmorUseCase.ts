import { inject, injectable } from "tsyringe";
import { IArmorRepository } from "../../repositories/IArmorRepository";

@injectable()
class DeleteArmorUseCase {

 constructor(
  @inject("ArmorRepository")
  private armorRepository: IArmorRepository
 ) { }

 async execute(id: string): Promise<void> {

  await this.armorRepository.deleteArmor(id)

 }
}

export { DeleteArmorUseCase }