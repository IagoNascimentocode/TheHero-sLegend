import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Armor } from "../../items/armor/entities/Armor";
import { Sword } from "../../items/swords/entities/Sword";


@Entity("stores")
class Store {

 @PrimaryColumn()
 id: number;

 @Column()
 name: string;

 @Column()
 shelf_from_armor: string;

 @OneToMany(() => Armor, armor => armor)
 @JoinColumn({ name: "shelf_from_armor" })
 armor: Armor[];

 @Column()
 shelf_from_sword: string;

 @OneToMany(() => Sword, sword => sword)
 @JoinColumn({ name: "shelf_from_sword" })
 sword: Sword[];

 @CreateDateColumn()
 created_at: Date;

 @UpdateDateColumn()
 updated_at: Date;

}

export { Store }