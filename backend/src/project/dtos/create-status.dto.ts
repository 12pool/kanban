import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStatusDTO {
  @IsNotEmpty({ message: 'Label is requred' })
  @IsString()
  @ApiProperty({ required: true })
  label: string;

  @IsNotEmpty({ message: 'Project Identifier is required' })
  @IsString({ message: 'Project Identifier must be a string' })
  @Transform(({ value }) => value.toLowerCase())
  @ApiProperty({ required: true })
  projectIdentifier: string;
}
