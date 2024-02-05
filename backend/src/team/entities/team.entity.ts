import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Unique,
} from 'typeorm';

import { ProjectEntity } from 'src/project/entities/project.entity';

@Entity('team')
@Unique(['name'])
export class TeamEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => ProjectEntity, (project) => project.team)
  projects: ProjectEntity[];

  // Owner of the team

  // TODO: Add users relationship teamMembership [user, team, role]?
}
