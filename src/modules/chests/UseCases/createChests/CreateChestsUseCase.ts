import { inject, injectable } from "tsyringe";
import { ICreateChestsDTO } from "../../dtos/ICreateChestsDTO";
import { IChestsRepository } from "../../repositories/IChestsRepository";

@injectable()
class CreateChestsUseCase {

 constructor(
  @inject("ChestsRepository")
  private chestsRepository: IChestsRepository
 ) { }

 async execute({ user_id }: ICreateChestsDTO): Promise<void> {

  await this.chestsRepository.create({ user_id })
 }
}

export { CreateChestsUseCase }
