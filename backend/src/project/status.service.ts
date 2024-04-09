import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateStatusDTO } from 'src/project/dtos/create-status.dto';
import { UpdateStatusDTO } from './dtos/update-status.dto';
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

  async update(id: string, updateStatusDTO: UpdateStatusDTO) {
    const status = await this.statusRepository.findOne({
      where: {
        id,
      },
    });

    if (!status) {
      throw new NotFoundException(`Status ${id} not found`);
    }

    const updatedStatus = {
      ...status,
      ...updateStatusDTO,
    };

    return await this.statusRepository.save(updatedStatus);
  }

  async remove(id: string) {
    const result = await this.statusRepository.delete(id);

    if (result.affected === 0) {
      throw new BadRequestException(`Deletion of status ${id} failed`);
    }

    return {
      message: `Status ${id} deleted`,
    };
  }
}
