import { ICreateArmorDTO } from "../dtos/ICreateArmorDTO";
import { Armor } from "../entities/Armor";

interface IArmorRepository {
 create({ name, armor, weight }: ICreateArmorDTO): Promise<void>;
 findAll(): Promise<Armor[]>;
 deleteArmor(): Promise<void>;

}
export { IArmorRepository }