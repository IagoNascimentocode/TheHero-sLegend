import { inject, injectable } from "tsyringe";
import { ISwordsRepository } from "../../repositories/ISwordsRepository";

@injectable()
class DeleteSwordUseCase {

 constructor(
  @inject("SwordsRepository")
  private swordsRepository: ISwordsRepository
 ) { }

 async execute(id: string) {

  await this.swordsRepository.deleteSword(id)

 }
}
export { DeleteSwordUseCase }