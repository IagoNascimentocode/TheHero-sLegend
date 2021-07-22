import { inject, injectable } from "tsyringe";
import { Sword } from "../../entities/Sword";
import { ISwordsRepository } from "../../repositories/ISwordsRepository";

@injectable()
class ListAllSwordsUseCase {

 constructor(
  @inject("SwordsRepository")
  private swordsRepository: ISwordsRepository
 ) { }

 async execute(): Promise<Sword[]> {

  const swords = await this.swordsRepository.listAll()

  return swords
 }
}

export { ListAllSwordsUseCase }