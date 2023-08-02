import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./users.entities";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  zipCode: string;

  @Column({ type: "varchar" })
  estate: string;

  @Column({ type: "varchar" })
  city: string;

  @Column({ type: "varchar" })
  street: string;

  @Column({ type: "varchar" })
  number: string;

  @Column({ type: "varchar" })
  complement: string;

  @OneToOne(() => User, (user) => user.address)
  user: User;
}
