import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeamDTO {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;
}
