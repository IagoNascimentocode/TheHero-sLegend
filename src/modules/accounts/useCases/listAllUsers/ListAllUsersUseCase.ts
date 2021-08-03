import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/UsersRepository";

@injectable()
class ListAllUsersUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: UsersRepository
 ) { }

 async execute(): Promise<User[]> {
  const allUsers = await this.usersRepository.listAll();

  return allUsers
 }
}

export { ListAllUsersUseCase }