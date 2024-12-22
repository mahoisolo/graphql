import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pet/entities/pet.entity';

@ObjectType()
export class Owner {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => [Pet], { nullable: 'items' })
  pets: Pet[];
}
