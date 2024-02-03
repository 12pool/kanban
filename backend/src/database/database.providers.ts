import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { DB } from 'src/constants';

export const databaseProviders = [
  {
    provide: DB.dataSource,
    useFactory: async (configService: ConfigService) => {
      const dbName = configService.get<string>('DB_NAME');

      const dataSource = new DataSource({
        type: 'sqlite',
        database: `db/${dbName}`,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, //disable on production
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
