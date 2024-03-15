import { DataSource } from 'typeorm';
import { DB } from 'src/constants';
import { ProjectEntity, StatusEntity } from './entities';

export const projectProviders = [
  {
    provide: DB.repositories.project,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProjectEntity),
    inject: [DB.dataSource],
  },
  {
    provide: DB.repositories.status,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(StatusEntity),
    inject: [DB.dataSource],
  },
];
