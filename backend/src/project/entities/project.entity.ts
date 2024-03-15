import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
  OneToMany,
} from 'typeorm';

import { TeamEntity } from 'src/team/entities/team.entity';
import { StatusEntity } from 'src/project/entities/status.entity';

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

  @OneToMany(() => StatusEntity, (status) => status.project)
  statuses: StatusEntity[];
}
