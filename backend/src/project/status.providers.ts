import { DataSource } from 'typeorm';
import { DB } from 'src/constants';

import { StatusEntity } from './entities/status.entity';

export const statusProviders = [
  {
    provide: DB.repositories.status,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(StatusEntity),
    inject: [DB.dataSource],
  },
];
