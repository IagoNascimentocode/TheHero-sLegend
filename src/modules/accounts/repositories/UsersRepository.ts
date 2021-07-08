import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "./IUsersRepository";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";


class UsersRepository implements IUsersRepository {

  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User)

  }

  async create({ name, email, password, birthDate, nationality, city, address, admin }: ICreateUserDTO): Promise<void> {

    const user = this.repository.create({
      name, email, password, birthDate, nationality, city, address, admin
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

  async listAll(): Promise<User[]> {
    const all = this.repository.find()

    return all
  }

  async updateUser(id: string, name?: string, city?: string, address?: string, nationality?: string): Promise<void> {
    await this.repository.createQueryBuilder()
      .update()
      .set({ name, city, address, nationality })
      .where("id = :id")
      .setParameters({ id })
      .execute()
  }
}

export { UsersRepository }