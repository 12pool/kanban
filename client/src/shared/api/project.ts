import { type Icons } from 'shared/avatar-picker/model';

export type Project = {
  id?: string;
  name: string;
  description: string;
  icon: Icons;
  color: string;
};

export type ProjectWithTeam = Project & {
  team: {
    id: string;
    name: string;
  };
};

export type ProjectAvatar = Pick<Project, 'icon' | 'color'>;

export class ProjectAPI {
  public static findOne = ({ teamName }: { teamName: string }) => {
    return `/project?teamName=${teamName}`;
  };

  public static create = () => {
    return '/project';
  };
}
