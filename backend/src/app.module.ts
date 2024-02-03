import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProjectModule } from './project/project.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [ProjectModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
