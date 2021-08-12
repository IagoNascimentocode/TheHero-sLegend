import { Store } from "../entities/Store";

interface IStoreRepository {
 create(id: number, name: string): Promise<void>;
 findAllStore(): Promise<Store[]>;
 findByID(id: number): Promise<Store>;
 addItems(store_id: number, armor_id: string, sword_id: string): Promise<void>;
 listAllStoreItems(store_id: number): Promise<Store[]>;
}

export { IStoreRepository }

