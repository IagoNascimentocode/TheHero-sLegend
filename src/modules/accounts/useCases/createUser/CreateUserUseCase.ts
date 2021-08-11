import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IChestsRepository } from "../../../chests/repositories/IChestsRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository,
  @inject("ChestsRepository")
  private chestsRepository: IChestsRepository,
 ) { }

 async execute({ name, email, password, birthDate, nationality, city, address, admin = false }: ICreateUserDTO) {

  const existingUser = await this.usersRepository.findByEmail(email)

  if (existingUser) {
   throw Error("User already exists")
  }

  const encryptedPassword = await hash(password, 8)

  const user = await this.usersRepository.create({
   name, email, password: encryptedPassword, birthDate, nationality, city, address, admin,
  })


  const chests = await this.chestsRepository.create({ user_id: user.id })

  this.usersRepository.updateChests_id(user.id, chests.id)
 }

}
export { CreateUserUseCase }