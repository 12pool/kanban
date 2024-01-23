import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDTO {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Team name is required' })
  @IsString({ message: 'Team name must be a string' })
  @Transform(({ value }) => value.toLowerCase())
  teamName: string;

  @IsString({ message: 'Description must be a string' })
  description?: string;

  @IsNotEmpty({ message: 'icon is required' })
  @IsString({ message: 'icon must be a string' })
  icon: string;

  @IsNotEmpty({ message: 'Color is required' })
  @IsString({ message: 'Color must be a string' })
  color: string;
}
