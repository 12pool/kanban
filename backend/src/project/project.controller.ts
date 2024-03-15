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
import { StatusService } from './status.service';

import {
  CreateProjectDTO,
  UpdateProjectDTO,
  CreateStatusDTO,
  //UpdateStatusDTO,
} from './dtos';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('project')
@Controller('project')
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly statusService: StatusService,
  ) {}

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

  @Post('/status/:projectIdentifier')
  @UseInterceptors(ClassSerializerInterceptor)
  async createStatus(
    @Param('projectIdentifier') projectIdentifier: string,
    @Body() createStatusDTO: CreateStatusDTO,
  ) {
    return await this.statusService.create(projectIdentifier, createStatusDTO);
  }

  @Get('/status/:statusId')
  async findOneStatus(@Param('statusId') statusId: string) {
    return await this.statusService.findOne(statusId);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() createProjectDTO: CreateProjectDTO) {
    return await this.projectService.create(createProjectDTO);
  }
}
