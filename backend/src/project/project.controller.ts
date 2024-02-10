import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';

import { ProjectService } from './project.service';

import { CreateProjectDTO } from './dtos/create-project.dto';
import { UpdateProjectDTO } from './dtos/update-project.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('project')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.projectService.findOne(id);
  }

  @Get(':teamName/all')
  @ApiQuery({ name: 'projectSearch', required: false })
  async findAll(
    @Param('teamName') teamName: string,
    @Query('projectSearch') projectSearch: string,
  ) {
    return await this.projectService.findAll(teamName, projectSearch);
  }

  @Get(':teamName/check-name')
  async checkName(
    @Param('teamName') teamName: string,
    @Query('name') name: string,
  ) {
    return await this.projectService.checkName(teamName, name);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() createProjectDTO: CreateProjectDTO) {
    return await this.projectService.create(createProjectDTO);
  }

  @Put(':id')
  @UseInterceptors(ClassSerializerInterceptor)
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
