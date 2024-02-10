import { type Project } from 'shared/project/model';

export type CreateProjectDTO = Omit<Project, 'projectIdentifier'> & {
  teamName: string;
};

export type UpdateProjectDTO = Required<
  Omit<Project, 'team' | 'projectIdentifier'>
>;
