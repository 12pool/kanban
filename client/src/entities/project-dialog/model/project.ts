import type { Project } from 'shared/project/model';

export type CreateProjectDTO = Omit<Project, 'id'> & {
  teamName: string;
};
