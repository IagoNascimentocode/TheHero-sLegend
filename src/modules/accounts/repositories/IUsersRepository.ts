import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
 create(data: ICreateUserDTO): Promise<User>;
 findByEmail(email: string): Promise<User>;
 findByID(id: string): Promise<User>;
 listAll(): Promise<User[]>;
 updateUser(id?: string, name?: string, address?: string, city?: string, nationality?: string): Promise<void>;
 deleteUser(id: string): Promise<void>;
 selectHero(user_id: string, hero_id: string): Promise<void>;
}

export { IUsersRepository }