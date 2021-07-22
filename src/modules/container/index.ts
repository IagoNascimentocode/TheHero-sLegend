import { container } from 'tsyringe';

import { IUsersRepository } from '../accounts/repositories/IUsersRepository';
import { UsersRepository } from '../accounts/repositories/UsersRepository';

import { IHeroesRepository } from '../heroes/repositories/IHeroesRepository';
import { HeroesRepository } from '../heroes/repositories/HeroesRepository';

import { ISwordsRepository } from '../items/swords/repositories/ISwordsRepository';
import { SwordsRepository } from '../items/swords/repositories/SwordsRepository';


container.registerSingleton<IUsersRepository>(
 "UsersRepository",
 UsersRepository
);

container.registerSingleton<IHeroesRepository>(
 "HeroesRepository",
 HeroesRepository
)

container.registerSingleton<ISwordsRepository>(
 "SwordsRepository",
 SwordsRepository
)