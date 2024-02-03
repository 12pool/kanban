import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDTO {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  @ApiProperty({ description: 'Name is required', required: true })
  name: string;
}
