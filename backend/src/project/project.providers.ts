import { DataSource } from 'typeorm';
import { DB } from 'src/constants';

import { ProjectEntity } from './entities/project.entity';

export const projectProviders = [
  {
    provide: DB.repositories.project,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProjectEntity),
    inject: [DB.dataSource],
  },
];
