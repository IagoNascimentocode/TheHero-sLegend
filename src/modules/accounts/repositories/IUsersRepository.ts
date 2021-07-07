import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
 create(data: ICreateUserDTO): Promise<void>;
 findByEmail(email: string): Promise<User>;
 findByID(id: string): Promise<User>;
 listAll(): Promise<User[]>;
}

export { IUsersRepository }