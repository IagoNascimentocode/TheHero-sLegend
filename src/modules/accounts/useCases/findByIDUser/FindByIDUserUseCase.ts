import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class FindByIDUserUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository
 ) { }

 async execute(id: string): Promise<User> {
  const user = await this.usersRepository.findByID(id)

  if (!user) {
   throw Error("User is not exists!")
  }

  return user
 }
}

export { FindByIDUserUseCase }