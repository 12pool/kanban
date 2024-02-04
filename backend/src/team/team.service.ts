import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { DB } from 'src/constants';

import { CreateTeamDTO } from './dtos/create-team.dto';
import { UpdateTeamDTO } from './dtos/update-team.dto';
import { TeamEntity } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @Inject(DB.repositories.team)
    private teamRepository: Repository<TeamEntity>,
  ) {}

  async findAll() {
    return await this.teamRepository.find();
  }

  async findOne(id: string) {
    const team = await this.teamRepository.findOne({
      where: {
        id,
      },
    });

    if (!team) {
      throw new NotFoundException(`Team ${id} not found`);
    }

    return team;
  }

  async create(createTeamDTO: CreateTeamDTO) {
    const team = await this.teamRepository.create(createTeamDTO);
    return await this.teamRepository.save(team);
  }

  async update(id: string, updateTeamDTO: UpdateTeamDTO) {
    const team = await this.teamRepository.findOne({
      where: {
        id,
      },
    });

    if (!team) {
      throw new NotFoundException(`Team ${id} not found`);
    }

    const updatedTeam = {
      ...team,
      ...updateTeamDTO,
    };

    return await this.teamRepository.save(updatedTeam);
  }

  async remove(id: string) {
    const result = await this.teamRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Team ${id} not found`);
    }

    return {
      message: `Team ${id} deleted`,
    };
  }

  async createIfNotExists(name: string) {
    const existingTeam = await this.teamRepository.findOne({ where: { name } });

    if (!existingTeam) {
      const newTeam = this.teamRepository.create({ name });
      await this.teamRepository.save(newTeam);
    }
  }
}
