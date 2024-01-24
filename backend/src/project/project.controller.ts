import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { ProjectService } from './project.service';

import { CreateProjectDTO } from './dtos/create-project.dto';
import { UpdateProjectDTO } from './dtos/update-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async findAll(@Query('teamName') teamName: string) {
    return await this.projectService.findAll(teamName);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.projectService.findOne(id);
  }

  @Get()
  async findAllContains(@Query('projectSearch') projectSearch: string) {
    return await this.projectService.findAllContains(projectSearch);
  }

  @Post()
  async create(@Body() createProjectDTO: CreateProjectDTO) {
    return await this.projectService.create(createProjectDTO);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProjectDTO: UpdateProjectDTO,
  ) {
    return await this.projectService.update(id, updateProjectDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.projectService.remove(id);
  }
}
