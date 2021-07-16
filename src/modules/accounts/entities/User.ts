import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Hero } from '../../heroes/entities/Hero';

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
 birthDate: Date

 @OneToMany(() => Hero, hero => hero.user)
 @JoinColumn({ name: "hero_id" })
 hero: Hero[];

 @Column()
 hero_id: string;

 @CreateDateColumn()
 created_at: Date

 @UpdateDateColumn()
 updated_at: Date

 constructor() {
  if (!this.id) {

   this.id = uuid();

  }
 }
}

export { User }