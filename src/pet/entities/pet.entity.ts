import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/owner.entity';

@ObjectType()
export class Pet {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true }) 
  type?: string;

  @Field(() => Owner)
  owner: Owner;
}
