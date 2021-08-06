import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Chests } from '../../chests/entities/Chests';
import { Hero } from '../../heroes/entities/hero';

@Entity("users")
class User {

 @PrimaryColumn()
 id: string;

 @Column()
 name: string;

 @Column()
 email: string;

 @Column()
 password: string;

 @Column()
 admin: boolean;

 @Column()
 nationality: string;

 @Column()
 city: string;

 @Column()
 address: string;

 @CreateDateColumn()
 birthDate: Date;

 @OneToMany(() => Hero, hero => hero.user)
 @JoinColumn({ name: "hero_id" })
 hero: Hero[];

 @Column()
 hero_id: string;

 @OneToOne(() => Chests)
 @JoinColumn({ name: "chests_id" })
 chests: Chests;

 @Column()
 chests_id: string;

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

export { User }