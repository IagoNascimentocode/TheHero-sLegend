import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"

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