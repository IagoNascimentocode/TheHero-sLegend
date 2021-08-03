import { response } from "express";
import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class ListUserChestUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository
 ) { }

 async execute(user_id: string): Promise<User[]> {

  const userChest = this.usersRepository.listUserChest(user_id)

  return userChest
 }
}

export { ListUserChestUseCase }