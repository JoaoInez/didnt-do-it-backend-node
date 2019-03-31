import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text')
  task: string

  @Column('boolean', { default: false })
  completed: boolean
}
