import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
@InputType()
export class CreatePetInput {
  @Field()
  @IsNotEmpty()
  name: string;
  @Field()
  type: string;
  @Field(() => Int)
  ownerId: number;
}
