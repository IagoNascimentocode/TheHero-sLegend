import { ICreateArmorDTO } from "../dtos/ICreateArmorDTO";
import { Armor } from "../entities/Armor";

interface IArmorRepository {
 create({ name, armor, weight, price }: ICreateArmorDTO): Promise<void>;
 findAll(): Promise<Armor[]>;
 deleteArmor(id: string): Promise<void>;

}
export { IArmorRepository }