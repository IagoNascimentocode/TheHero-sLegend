import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class CreateUserUseCase {

 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository
 ) { }

 async execute({ name, email, password, birthDate, nationality, city, address, admin = false }: ICreateUserDTO) {

  const existingUser = await this.usersRepository.findByEmail(email)

  if (existingUser) {
   throw Error("User already exists")
  }

  const encryptedPassword = await hash(password, 8)

  await this.usersRepository.create({
   name, email, password: encryptedPassword, birthDate, nationality, city, address, admin
  })

 }

}
export { CreateUserUseCase }