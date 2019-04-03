import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Todo } from './Todo'

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

  @OneToMany(type => Todo, todo => todo.user)
  tasks: Todo[]
}
