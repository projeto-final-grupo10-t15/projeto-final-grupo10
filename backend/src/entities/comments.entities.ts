import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./users.entities";
import { Car } from "./cars.entities";

@Entity("comments")
export class Comments {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  comments: string;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Car, (car) => car.comments)
  car: Car;
}
