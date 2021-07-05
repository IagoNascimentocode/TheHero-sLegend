import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/UsersRepository";
import { User } from "../entities/User";

class UsersRepository {

 private repository: Repository<User>;

 constructor() {
  this.repository = getRepository(User);

 }

 async create({ name, email, password, birthDate, nationality, city, address, isAdmin = false }: ICreateUserDTO): Promise<void> {

  const user = this.repository.create({
   name, email, password, birthDate, nationality, city, address, isAdmin
  })

  await this.repository.save(user)
 }

 async findByEmail(email: string): Promise<User> {
  const user = await this.repository.findOne({ email })

  return user
 }

 async findByID(id: string): Promise<User> {
  const user = await this.repository.findOne({ id })

  return user
 }
}

export { UsersRepository }