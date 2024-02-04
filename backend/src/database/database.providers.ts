import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { DB } from 'src/constants';
import type { EnvironmentVariables } from 'src/shared/config/config.interface';

export const databaseProviders = [
  {
    provide: DB.dataSource,
    useFactory: async (configService: ConfigService<EnvironmentVariables>) => {
      const dbName = configService.get('DB_NAME', { infer: true });

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
