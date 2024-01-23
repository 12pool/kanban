import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TeamModule } from 'src/team/team.module';
import { TeamEntity } from 'src/team/entities/team.entity';

import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectEntity } from './entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity, TeamEntity]), TeamModule],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
