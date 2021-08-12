import { inject, injectable } from "tsyringe";
import { IStoreRepository } from "../../repositories/IStoreRepository";


@injectable()
class CreateStoreUseCase {

 constructor(
  @inject("StoreRepository")
  private storeRepository: IStoreRepository
 ) { }

 async execute(id: number, name: string): Promise<void> {

  await this.storeRepository.create(id, name)


 }
}

export { CreateStoreUseCase }