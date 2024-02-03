import { DB } from 'src/constants';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: DB.dataSource,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'db/sql.sqlite',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, //disable on production
      });

      return dataSource.initialize();
    },
  },
];
