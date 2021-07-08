import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class UpdateUserUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository
 ) { }

 async execute(id: string, name?: string, address?: string, city?: string, nationality?: string) {

  const user = await this.usersRepository.findByID(id)

  if (!user) {
   throw Error("Users is not exists")
  }

  await this.usersRepository.updateUser(
   id,
   name,
   address,
   city,
   nationality
  )

 }
}

export { UpdateUserUseCase }