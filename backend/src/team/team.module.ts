import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TeamEntity } from './entities/team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamEntity])],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
