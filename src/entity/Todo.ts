import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User'

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text')
  task: string

  @Column('boolean', { default: false })
  completed: boolean

  @ManyToOne(type => User, user => user.todos)
  user: User
}
