import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Owner } from './entities/owner.entity';
import { OwnerService } from './owner.service';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input'; // Import the UpdateOwnerInput DTO

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(private ownerService: OwnerService) {}

  @Query(() => [Owner])
 async  getOwners(): Promise<Owner[]> {
    // Return type should be Promise for async operations
    return this.ownerService.getAllOwners();
  }

  @Query(() => Owner)
  async getOwnerById(@Args('id', { type: () => Int }) id: number): Promise<Owner> {
    return this.ownerService.getOwnerById(id);
  }

  @Mutation(() => Owner)
  async createOwner(
    @Args('createOwnerInput') createOwnerDto: CreateOwnerInput,
  ): Promise<Owner> {
    return this.ownerService.createOwner(createOwnerDto);
  }

  @Mutation(() => Owner)
  async updateOwner(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateOwnerInput') updateOwnerDto: UpdateOwnerInput, // Use a dedicated UpdateOwnerInput DTO
  ): Promise<Owner> {
    return this.ownerService.updateOwner(id, updateOwnerDto);
  }

  @Mutation(() => Owner)
  async deleteOwner(@Args('id', { type: () => Int }) id: number): Promise<Owner> {
    return this.ownerService.deleteOwner(id);
  }
}
