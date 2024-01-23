import { type Icons } from 'shared/avatar-picker/model';

export type Project = {
  id?: string;
  name: string;
  description: string;
  icon: Icons;
  color: string;
  teamName: string;
};

export type CreateProjectDTO = Omit<Project, 'id'>;

export type Avatar = Pick<Project, 'icon' | 'color'>;
