import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDTO {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  @ApiProperty({ required: true })
  name: string;

  @IsNotEmpty({ message: 'Team name is required' })
  @IsString({ message: 'Team name must be a string' })
  @Transform(({ value }) => value.toLowerCase())
  @ApiProperty({ required: true })
  teamName: string;

  @IsString({ message: 'Description must be a string' })
  @ApiProperty({ required: false })
  description?: string;

  @IsNotEmpty({ message: 'icon is required' })
  @IsString({ message: 'icon must be a string' })
  @ApiProperty({ required: true })
  icon: string;

  @IsNotEmpty({ message: 'Color is required' })
  @IsString({ message: 'Color must be a string' })
  @ApiProperty({ required: true })
  color: string;

  @Expose()
  get projectIdentifier() {
    return `${this.teamName.toLocaleLowerCase()}.${this.name.toLocaleLowerCase()}`;
  }
}
