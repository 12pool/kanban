import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateStatusDTO } from 'src/project/dtos/create-status.dto';
import { StatusEntity } from './entities/status.entity';
import { ProjectEntity } from './entities/project.entity';
import { DB } from 'src/constants';

@Injectable()
export class StatusService {
  constructor(
    @Inject(DB.repositories.status)
    private statusRepository: Repository<StatusEntity>,
    @Inject(DB.repositories.project)
    private projectRepository: Repository<ProjectEntity>,
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

  async create(createStatusDTO: CreateStatusDTO) {
    const project = await this.projectRepository.findOne({
      where: {
        projectIdentifier: createStatusDTO.projectIdentifier,
      },
    });

    const lowerCasedLabel = createStatusDTO.label.toLowerCase();

    const status = await this.statusRepository.create({
      ...CreateStatusDTO,
      label: lowerCasedLabel,
      project,
    });

    return await this.statusRepository.save(status);
  }
}
