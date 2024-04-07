import { DataSource, EntityTarget } from 'typeorm';
import { TeamEntity } from './team/entities/team.entity';

export class TestHelper {
  private dataSource: Promise<DataSource>;

  constructor() {
    this.dataSource = new DataSource({
      type: 'sqlite',
      database: `db/test.sqlite`,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }).initialize();
  }

  private async getRepo<T>(entity: EntityTarget<T>) {
    return (await this.dataSource).getRepository(entity);
  }

  async createTeam() {
    console.log('test123');
    const repo = await this.getRepo(TeamEntity);
    await repo.create({
      name: 'test',
    });
  }
}
