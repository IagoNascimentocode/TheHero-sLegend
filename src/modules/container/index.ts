import { container } from 'tsyringe';

import { IUsersRepository } from '../accounts/repositories/IUsersRepository';
import { UsersRepository } from '../accounts/repositories/UsersRepository';


container.registerSingleton<IUsersRepository>(
 "UsersRepository",
 UsersRepository
);