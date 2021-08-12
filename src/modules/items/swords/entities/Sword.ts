import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Chests } from "../../../chests/entities/Chests";

@Entity("swords")
class Sword {

 @PrimaryColumn()
 id: string;

 @Column()
 name: string;

 @Column()
 damage: number;

 @Column()
 weight: number;

 @Column()
 price: number;

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;

 constructor() {

  if (!this.id) {
   this.id = uuid();

  }
 }

}

export { Sword }