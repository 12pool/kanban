import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { TeamService } from './team.service';

import { CreateTeamDTO } from './dtos/create-team.dto';
import { UpdateTeamDTO } from './dtos/update-team.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('team')
@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async findAll() {
    return await this.teamService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.teamService.findOne(id);
  }

  @Post()
  async create(@Body() createTeamDTO: CreateTeamDTO) {
    return await this.teamService.create(createTeamDTO);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTeamDTO: UpdateTeamDTO) {
    return await this.teamService.update(id, updateTeamDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.teamService.remove(id);
  }
}
