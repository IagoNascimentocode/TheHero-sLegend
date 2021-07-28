import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../accounts/entities/User";
import { Armor } from "../../items/armor/entities/Armor";
import { Sword } from "../../items/swords/entities/Sword";

@Entity("chests")
class Chests {

 @PrimaryColumn()
 id: string;

 @Column()
 wallet: number;

 @OneToOne(() => User)
 @JoinColumn({ name: "user_id" })
 user: User;

 @OneToMany(() => Sword, sword => sword.id)
 @JoinColumn({ name: "sword_id" })
 sword: Sword[];

 @OneToMany(() => Armor, armor => armor.id)
 @JoinColumn({ name: "armor_id" })
 armor: Armor[];

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;
}

export { Chests }