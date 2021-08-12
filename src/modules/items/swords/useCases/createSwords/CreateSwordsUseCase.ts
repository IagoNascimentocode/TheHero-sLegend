import { inject, injectable } from "tsyringe";
import { ICreateSwordsDTO } from "../../dtos/ICreateSwordsDTO";
import { ISwordsRepository } from "../../repositories/ISwordsRepository";

@injectable()
class CreateSwordsUseCase {

 constructor(
  @inject("SwordsRepository")
  private swordsRepository: ISwordsRepository
 ) { }

 async execute({ name, damage, weight, price }: ICreateSwordsDTO): Promise<void> {

  await this.swordsRepository.create({ name, damage, weight, price })
 }
}

export { CreateSwordsUseCase }