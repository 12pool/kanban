import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service';
import { TestHelper } from 'src/test-helper';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeAll(async () => {
    const helper = new TestHelper();
    await helper.createTeam();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectService],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
