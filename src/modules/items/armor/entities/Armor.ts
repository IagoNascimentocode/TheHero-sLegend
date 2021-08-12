import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Store } from "../../../stores/entities/Store";

@Entity("armors")
class Armor {

 @PrimaryColumn()
 id: string;

 @Column()
 name: string;

 @Column()
 armor: number;

 @Column()
 weight: number;

 @Column()
 price: number;

 @Column()
 store_id: number

 @ManyToOne(() => Store)
 @JoinColumn({ name: "store_id" })
 store: Store;

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date

 constructor() {
  if (!this.id) {
   this.id = uuid();
  }
 }
}

export { Armor }