import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TeamService } from './team/team.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Temporary solution until we have a proper auth system and team creation flow
  const teamService = app.get(TeamService);
  await teamService.createIfNotExists('test-team');

  const config = new DocumentBuilder()
    .setTitle('kanban')
    .setDescription('this is tne kanban API version 1.0')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // TODO: Change origin to the frontend URL based on env config
  app.enableCors({ origin: '*' });
  await app.listen(3002);
}
bootstrap();
