import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { InputType } from 'type-graphql';

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  @IsOptional()
  email?: string;
}
