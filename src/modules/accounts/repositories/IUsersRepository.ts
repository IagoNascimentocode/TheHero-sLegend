import { Hero } from '../../heroes/entities/Hero';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
 create(data: ICreateUserDTO): Promise<void>;
 findByEmail(email: string): Promise<User>;
 findByID(id: string): Promise<User>;
 listAll(): Promise<User[]>;
 updateUser(id?: string, name?: string, address?: string, city?: string, nationality?: string): Promise<void>;
 deleteUser(id: string): Promise<void>;
 updateHero(user_id: string, hero_id: string): Promise<void>;
}

export { IUsersRepository }