import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProjectModule } from './project/project.module';
import { ProjectEntity } from './project/entities/project.entity';
import { TeamEntity } from './team/entities/team.entity';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.sqlite',
      synchronize: true,
      entities: [ProjectEntity, TeamEntity],
    }),
    ProjectModule,
    TeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
