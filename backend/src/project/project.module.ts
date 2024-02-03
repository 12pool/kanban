import { Module } from '@nestjs/common';

import { TeamModule } from 'src/team/team.module';
import { DatabaseModule } from 'src/database/database.module';
import { teamProviders } from 'src/team/team.providers';

import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { projectProviders } from './project.providers';

@Module({
  imports: [DatabaseModule, TeamModule],
  providers: [...projectProviders, ...teamProviders, ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
