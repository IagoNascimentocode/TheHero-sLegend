import { inject, injectable } from "tsyringe";
import { IHeroesRepository } from "../../repositories/IHeroesRepository";
import csvParse from "csv-parse"
import fs from "fs"
import parse from "csv-parse";


interface IImportHeroes {
 name: string;
 type: string;
 life: number;
 damage: number;
 strength: number
 armor: number;
 agility: number;
 intelligence: number;
 movementSpeed: number;
}

@injectable()
class ImportHeroesUseCase {

 constructor(
  @inject("HeroesRepository")
  private heroesRepository: IHeroesRepository
 ) { }

 loadHeroes(file: Express.Multer.File): Promise<IImportHeroes[]> {
  return new Promise((resolve, reject) => {

   const stream = fs.createReadStream(file.path)

   const heroes: IImportHeroes[] = []

   const parseFile = csvParse()

   stream.pipe(parseFile)

   parseFile.on("data", async (line) => {
    const [name, type, life, damage, strength, armor, agility, intelligence, movementSpeed] = line

    heroes.push({ name, type, life, damage, strength, armor, agility, intelligence, movementSpeed })
   })
    .on("end", () => {
     fs.promises.unlink(file.path)
     resolve(heroes)
    })
    .on("error", (err) => {
     reject(err)
    })

  })
 }


 async execute(file: Express.Multer.File): Promise<void> {
  const heroes = await this.loadHeroes(file)

  heroes.map(async heroes => {
   const { name, type, life, damage, strength, armor, agility, intelligence, movementSpeed } = heroes

   await this.heroesRepository.create({ name, type, life, damage, strength, armor, agility, intelligence, movementSpeed })
  })
 }
}

export { ImportHeroesUseCase }