import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStatusDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  label: string;
}
