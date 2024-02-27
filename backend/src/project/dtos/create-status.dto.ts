import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStatusDTO {
  @IsNotEmpty({ message: 'Label is requred' })
  @IsString()
  @ApiProperty({ required: true })
  label: string;
}
