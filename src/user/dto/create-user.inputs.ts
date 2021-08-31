import { IsNotEmpty, IsString } from 'class-validator';
import { InputType } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  email: string;
}
