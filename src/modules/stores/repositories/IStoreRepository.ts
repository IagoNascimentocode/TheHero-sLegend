import { Store } from "../entities/Store";

interface IStoreRepository {
 create(id: number, name: string): Promise<Store>;
}

export { IStoreRepository }

