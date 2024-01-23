import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTeamDTO {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name?: string;
}
