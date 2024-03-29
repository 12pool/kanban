import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
} from 'typeorm';

import { TeamEntity } from 'src/team/entities/team.entity';

@Entity('project')
@Unique(['name', 'team'])
export class ProjectEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  projectIdentifier: string;

  @Column()
  name: string;

  @Column()
  originalName: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  icon: string;

  @Column()
  color: string;

  @ManyToOne(() => TeamEntity, (team) => team.projects)
  team: TeamEntity;
}
