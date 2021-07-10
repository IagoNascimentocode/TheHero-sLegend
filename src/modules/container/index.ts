import { container } from 'tsyringe';

import { IUsersRepository } from '../accounts/repositories/IUsersRepository';
import { UsersRepository } from '../accounts/repositories/UsersRepository';

import { HeroesRepository } from '../heroes/repositories/HeroesRepository';
import { IHeroesRepository } from '../heroes/repositories/IHeroesRepository';


container.registerSingleton<IUsersRepository>(
 "UsersRepository",
 UsersRepository
);

container.registerSingleton<IHeroesRepository>(
 "HeroesRepository",
 HeroesRepository
)