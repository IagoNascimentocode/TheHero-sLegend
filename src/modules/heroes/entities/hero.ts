import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { User } from "../../accounts/entities/User";

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
 user_id: string;

 @ManyToOne(() => User)
 @JoinColumn({ name: "user_id" })
 user: User;

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