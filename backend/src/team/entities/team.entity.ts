import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { ProjectEntity } from 'src/project/entities/project.entity';

@Entity('team')
export class TeamEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => ProjectEntity, (project) => project.team)
  projects: ProjectEntity[];

  // TODO: Add users relationship teamMembership [user, team, role]?
}
