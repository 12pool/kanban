import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

import { CreateProjectDTO } from './dtos/create-project.dto';
import { UpdateProjectDTO } from './dtos/update-project.dto';
import { ProjectEntity } from './entities/project.entity';
import { TeamEntity } from 'src/team/entities/team.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
    @InjectRepository(TeamEntity)
    private teamRepository: Repository<TeamEntity>,
  ) {}

  async findAll(teamName: string, projectSearch: string) {
    return await this.projectRepository.find({
      where: {
        team: {
          name: teamName,
        },
        name: Like(`%${projectSearch}%`),
      },
    });
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

  async findOneByProjectIdentifier(teamName: string, projectName: string) {
    return await this.projectRepository.findOne({
      where: {
        team: {
          name: teamName,
        },
        name: projectName,
      },
    });
  }

  async create(createProjectDTO: CreateProjectDTO) {
    const team = await this.teamRepository.findOne({
      where: {
        name: createProjectDTO.teamName,
      },
    });

    if (!team) {
      throw new NotFoundException(
        `Team ${createProjectDTO.teamName} not found`,
      );
    }

    // to make sure we don't have two projects with the same name
    // because we use name in the url and browsers don't care about case
    const lowerCasedName = createProjectDTO.name.toLowerCase();

    const project = await this.projectRepository.create({
      ...createProjectDTO,
      name: lowerCasedName,
      originalName: createProjectDTO.name,
      team,
    });

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
