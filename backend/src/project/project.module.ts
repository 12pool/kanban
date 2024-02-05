import { Module } from '@nestjs/common';

import { TeamModule } from 'src/team/team.module';
import { DatabaseModule } from 'src/database/database.module';

import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { projectProviders } from './project.providers';

@Module({
  imports: [DatabaseModule, TeamModule],
  providers: [...projectProviders, ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
