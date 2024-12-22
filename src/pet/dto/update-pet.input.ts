import { CreatePetInput } from './create-pet.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
@InputType()
export class UpdatePetInput extends PartialType(CreatePetInput) {
  @Field(() => Int)
  id: number;
  @Field()
  @IsNotEmpty()
  name: string;
  @Field()
  type: string;
  @Field(() => Int)
  ownerId: number;
}
