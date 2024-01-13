import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('project')
export class ProjectEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  avatar: string;

  @Column()
  color: string;
}
