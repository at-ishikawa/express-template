// @flow
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import BaseEntity from "./BaseEntity";

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn("int")
    id = undefined;

    @Column("varchar")
    email = "";

    @Column("varchar")
    password = "";

    @CreateDateColumn()
    created_at = undefined;

    @UpdateDateColumn()
    updated_at = undefined;
}
