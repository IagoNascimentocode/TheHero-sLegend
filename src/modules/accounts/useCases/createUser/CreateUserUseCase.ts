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

  await this.usersRepository.create({
   name, email, password, birthDate, nationality, city, address, admin
  })

 }

}
export { CreateUserUseCase }