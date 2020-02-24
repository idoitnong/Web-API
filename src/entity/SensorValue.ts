import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn
} from "typeorm";
import { Sensor } from "./Sensor";

@Entity()
export class SensorValue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(
    type => Sensor,
    sensor => sensor.values
  )
  sensor: Sensor;
}
