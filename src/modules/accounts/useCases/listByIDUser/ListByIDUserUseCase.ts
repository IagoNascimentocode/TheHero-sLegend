import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ListByIDUserUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository
 ) { }

 async execute(id: string): Promise<User> {

  const user = await this.usersRepository.findByID(id)

  return user
 }
}

export { ListByIDUserUseCase }