import type { Project } from 'shared/api';

export type CreateProjectDTO = Omit<Project, 'id'> & {
  teamName: string;
};
