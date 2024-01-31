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
  public static findAll = ({
    teamName,
    projectSearch,
  }: {
    teamName: string;
    projectSearch?: string;
  }) => {
    return `/project/${teamName}?projectSearch=${projectSearch ?? ''}`;
  };

  public static findOne = ({ id }: { id: string }) => {
    return `/project/${id}`;
  };

  public static findOneByProjectIdentifier = ({
    teamName,
    projectName,
  }: {
    teamName: string;
    projectName: string;
  }) => {
    return `/project/${teamName}/${projectName}`;
  };

  public static create = () => {
    return '/project';
  };

  public static checkName = ({
    teamName,
    name,
  }: {
    teamName: string;
    name: string;
  }) => {
    return `/project/${teamName}/check-name?name=${name}`;
  };
}
