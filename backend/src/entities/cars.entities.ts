import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./users.entities";
import { Comments } from "./comments.entities";

@Entity("cars")
export class Car {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  brand: string;

  @Column({ type: "varchar" })
  model: string;

  @Column({ type: "int" })
  year: number | string;

  @Column({ type: "varchar" }) // ENUM
  fuel_type: string;

  @Column({ type: "int" })
  mileage: number | string;

  @Column({ type: "varchar" })
  color: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  FIPE_price: number | string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number | string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  cover_image: string;

  @Column({ type: "varchar" })
  first_image: string;

  @ManyToOne(() => User, (user) => user.cars)
  user: User;

  @OneToMany(() => Comments, (comments) => comments.car, {onDelete:"CASCADE"})
  comments: Comments[];
}
