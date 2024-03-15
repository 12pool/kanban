import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStatusDTO {
  @IsNotEmpty({ message: 'Label is requred' })
  @IsString()
  @ApiProperty({ required: true })
  label: string;
}
