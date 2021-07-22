import { getRepository, Repository } from "typeorm"
import { Armor } from "../entities/Armor"
import { IArmorRepository } from "./IArmorRepository"

class ArmorRepository implements IArmorRepository {

 private repository: Repository<Armor>

 constructor() {

  this.repository = getRepository(Armor)

 }



}

export { ArmorRepository }