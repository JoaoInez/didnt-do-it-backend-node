import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 255, unique: true })
  username: string

  @Column({ length: 255, unique: true })
  email: string

  @Column('text')
  password: string
}
