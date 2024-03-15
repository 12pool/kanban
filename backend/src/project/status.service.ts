import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateStatusDTO } from 'src/project/dtos/create-status.dto';
import { StatusEntity } from './entities/status.entity';
import { DB } from 'src/constants';
import { ProjectService } from './project.service';

@Injectable()
export class StatusService {
  constructor(
    @Inject(DB.repositories.status)
    private statusRepository: Repository<StatusEntity>,
    @Inject(ProjectService)
    private projectService: ProjectService,
  ) {}

  async findOne(id: string) {
    const status = await this.statusRepository.findOne({
      where: {
        id,
      },
    });

    if (!status) {
      throw new NotFoundException(`Status ${id} not found`);
    }

    return status;
  }

  async create(id: string, createStatusDTO: CreateStatusDTO) {
    const project = await this.projectService.findOne(id);

    const status = await this.statusRepository.create({
      ...createStatusDTO,
      project,
    });

    return await this.statusRepository.save(status);
  }
}
