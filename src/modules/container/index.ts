import { container } from 'tsyringe';

import { UsersRepository } from '../accounts/repositories/UsersRepository';


container.registerSingleton(
 "UsersRepository",
 UsersRepository
);