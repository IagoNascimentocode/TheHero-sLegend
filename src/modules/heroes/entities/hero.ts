import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { User } from "../../accounts/entities/User";
import { Armor } from "../../items/armor/entities/Armor";
import { Sword } from "../../items/swords/entities/Sword";

@Entity("heroes")
class Hero {

 @PrimaryColumn()
 id: string;

 @Column()
 name: string;

 @Column()
 type: string;

 @Column()
 life: number;

 @Column()
 damage: number;

 @Column()
 armor: number;

 @Column()
 strength: number;

 @Column()
 agility: number;

 @Column()
 intelligence: number;

 @Column()
 movementSpeed: number;

 @Column()
 cash: number;

 @Column()
 user_id: string;

 @ManyToOne(() => User)
 @JoinColumn({ name: "user_id" })
 user: User;

 @Column()
 slot_from_sword: string;

 @OneToOne(() => Sword)
 @JoinColumn({ name: "slot_from_sword" })
 sword: Sword

 @Column()
 slot_from_armor: string;

 @OneToOne(() => Armor)
 @JoinColumn({ name: "slot_from_armor" })
 armors: Armor

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

export { Hero }