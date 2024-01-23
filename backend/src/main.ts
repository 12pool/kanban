import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TeamService } from './team/team.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Temporary solution until we have a proper auth system and team creation flow
  const teamService = app.get(TeamService);
  await teamService.createIfNotExists('test-team');

  // TODO: Change origin to the frontend URL based on env config
  app.enableCors({ origin: '*' });
  await app.listen(3002);
}
bootstrap();
