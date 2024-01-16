import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProjectDTO {
  @IsNotEmpty({ message: 'Name is required' })
  name?: string;

  @IsString({ message: 'Description must be a string' })
  description?: string;

  @IsNotEmpty({ message: 'icon is required' })
  @IsString({ message: 'icon must be a string' })
  icon?: string;

  @IsNotEmpty({ message: 'Color is required' })
  @IsString({ message: 'Color must be a string' })
  color?: string;
}
