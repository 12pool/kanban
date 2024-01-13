import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProjectDTO } from './dtos/create-project.dto';
import { UpdateProjectDTO } from './dtos/update-project.dto';
import { ProjectEntity } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
  ) {}

  async findAll() {
    return await this.projectRepository.find();
  }

  async findOne(id: string) {
    const project = await this.projectRepository.findOne({
      where: {
        id,
      },
    });

    if (!project) {
      throw new NotFoundException(`Project ${id} not found`);
    }

    return project;
  }

  async create(createProjectDTO: CreateProjectDTO) {
    const project = await this.projectRepository.create(createProjectDTO);
    return await this.projectRepository.save(project);
  }

  async update(id: string, updateProjectDTO: UpdateProjectDTO) {
    const project = await this.projectRepository.findOne({
      where: {
        id,
      },
    });

    if (!project) {
      throw new NotFoundException(`Project ${id} not found`);
    }

    const updatedProject = {
      ...project,
      ...updateProjectDTO,
    };

    return await this.projectRepository.save(updatedProject);
  }

  async remove(id: string) {
    const result = await this.projectRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Project ${id} not found`);
    }

    return {
      message: `Project ${id} deleted`,
    };
  }
}
