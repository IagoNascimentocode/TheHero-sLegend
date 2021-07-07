import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/UsersRepository";

@injectable()
class ListAllUsersUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: UsersRepository
 ) { }

 async execute() {
  const allUsers = await this.usersRepository.listAll();

  return allUsers
 }
}

export { ListAllUsersUseCase }