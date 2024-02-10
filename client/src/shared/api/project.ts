export class ProjectAPI {
  public static findAll = ({
    teamName,
    projectSearch,
  }: {
    teamName: string;
    projectSearch?: string;
  }) => {
    return `/project/${teamName}/all?projectSearch=${projectSearch ?? ''}`;
  };
  /***
   * Can be fetched by id or projectIdentifier
   */
  public static findOne = (id: string) => {
    return `/project/${id}`;
  };

  public static create = () => {
    return '/project';
  };

  public static update = (id: string) => {
    return `/project/${id}`;
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
