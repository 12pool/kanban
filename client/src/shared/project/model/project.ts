import { type Icons } from 'shared/avatar-picker/model';

export type ProjectWithTeam = Project & {
  team: {
    id: string;
    name: string;
  };
};

export type ProjectAvatar = Pick<Project, 'icon' | 'color'>;

export type Project = {
  id?: string;
  name: string;
  description: string;
  icon: Icons;
  color: string;
  projectIdentifier: string;
};

export const createProjectIdentifier = ({
  projectName,
  teamName,
}: {
  projectName?: string;
  teamName?: string;
}) => {
  if (!projectName || !teamName) return undefined;

  return `${teamName.toLowerCase()}.${projectName.toLowerCase()}`;
};
