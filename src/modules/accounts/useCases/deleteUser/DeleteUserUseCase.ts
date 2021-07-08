import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class DeleteUserUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository
 ) { }

 async execute(_id: string) {
  const id = this.usersRepository.findByID(_id)

  if (!id) {
   throw Error("User is not exists!")
  }

  await this.usersRepository.deleteUser(_id)
 }

}

export { DeleteUserUseCase }