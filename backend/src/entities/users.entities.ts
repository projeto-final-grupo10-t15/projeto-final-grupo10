import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Address } from "./addresses.entities";
import { Car } from "./cars.entities";
import { Comments } from "./comments.entities";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar" })
  profile_image: string | null;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  cpf: string;

  @Column({ type: "date" })
  birthdate: string|Date;

  @Column({ type: "varchar" })
  contact_number: string;

  @Column()
  account_type: string; // ENUM

  @OneToOne(() => Address, (address) => address.user)
  @JoinColumn()
  address: Address;

  @OneToMany(() => Car, (car) => car.user)
  cars: Car[];

  @OneToMany(() => Comments, (comments) => comments.user)
  comments: Comments[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPass() {
    const isEncrypted: number = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
