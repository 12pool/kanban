import { DataSource } from 'typeorm';
import { DB } from 'src/constants';

import { TeamEntity } from './entities/team.entity';

export const teamProviders = [
  {
    provide: DB.repositories.team,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TeamEntity),
    inject: [DB.dataSource],
  },
];
