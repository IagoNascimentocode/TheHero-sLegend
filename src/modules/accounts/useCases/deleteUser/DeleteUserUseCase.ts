import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class DeleteUserUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository
 ) { }

 async execute(id: string) {
  const hero = this.usersRepository.findByID(id)

  if (!hero) {
   throw Error("User is not exists!")
  }

  await this.usersRepository.deleteUser(id)
 }

}

export { DeleteUserUseCase }