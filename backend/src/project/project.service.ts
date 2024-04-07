import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Like, Repository } from 'typeorm';

import { CreateProjectDTO } from './dtos/create-project.dto';
import { UpdateProjectDTO } from './dtos/update-project.dto';
import { ProjectEntity } from './entities/project.entity';
import { TeamEntity } from 'src/team/entities/team.entity';
import { SimpleException } from 'src/shared/exceptions/SimpleManual.exception';
import { FormException } from 'src/shared/exceptions/Form.exception';
import { DB } from 'src/constants';

@Injectable()
export class ProjectService {
  constructor(
    @Inject(DB.repositories.project)
    private projectRepository: Repository<ProjectEntity>,
    @Inject(DB.repositories.team)
    private teamRepository: Repository<TeamEntity>,
  ) {}

  async findAll(teamName: string, projectSearch: string) {
    return await this.projectRepository.find({
      where: {
        team: {
          name: teamName,
        },
        name: projectSearch ? Like(`%${projectSearch}%`) : undefined,
      },
    });
  }

  async findOne(id: string) {
    const project = await this.projectRepository.findOne({
      where: [
        {
          id,
        },
        {
          projectIdentifier: id,
        },
      ],
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
      throw new SimpleException(`Team ${createProjectDTO.teamName} not found`);
    }

    // to make sure we don't have two projects with the same name
    // because we use name in the url and browsers don't care about case
    const lowerCasedName = createProjectDTO.name.toLowerCase();

    // check if project with such name already exists
    const projectWithSameName = await this.projectRepository.findOne({
      where: {
        name: lowerCasedName,
        team,
      },
    });

    if (projectWithSameName) {
      throw new FormException([
        {
          field: 'name',
          message: `Project with name ${createProjectDTO.name} already exists`,
        },
      ]);
    }

    const project = await this.projectRepository.create({
      ...createProjectDTO,
      name: lowerCasedName,
      originalName: createProjectDTO.name,
      projectIdentifier: createProjectDTO.projectIdentifier,
      team,
    });

    return await this.projectRepository.save(project);
  }

  async update(id: string, updateProjectDTO: UpdateProjectDTO) {
    const project = await this.projectRepository.findOne({
      where: {
        id,
      },
      relations: ['team'],
    });

    if (!project) {
      throw new NotFoundException(`Project ${id} not found`);
    }

    const updatedProject = {
      ...project,
      ...updateProjectDTO,
      projectIdentifier: this.createProjectIdentifier({
        projectName: updateProjectDTO.name,
        teamName: project.team.name,
      }),
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

  async checkName(teamName: string, name: string) {
    const project = await this.projectRepository.findOne({
      where: {
        team: {
          name: teamName,
        },
        name,
      },
    });

    return !!project;
  }

  createProjectIdentifier({
    projectName,
    teamName,
  }: {
    projectName: string;
    teamName: string;
  }) {
    return `${teamName.toLowerCase()}.${projectName.toLowerCase()}`;
  }
}
