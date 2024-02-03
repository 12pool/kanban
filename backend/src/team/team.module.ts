import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { teamProviders } from './team.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...teamProviders, TeamService],
  controllers: [TeamController],
  exports: [TeamService],
})
export class TeamModule {}
