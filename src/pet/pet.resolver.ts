import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';

@Resolver(() => Pet)
export class PetResolver {
  constructor(private readonly petService: PetService) {}

  @Mutation(() => Pet)
  createPet(@Args('createPetInput') createPetInput: CreatePetInput) {
    return this.petService.create(createPetInput); // Create a new pet
  }

  @Query(() => [Pet], { name: 'findAllPets' }) // Updated name for clarity
  findAll() {
    return this.petService.findAll(); // Retrieve all pets
  }

  @Query(() => Pet, { name: 'findPet' }) // Updated name for clarity
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.petService.findOne(id); // Find a specific pet
  }

  @Mutation(() => Pet)
  updatePet(@Args('updatePetInput') updatePetInput: UpdatePetInput) {
    return this.petService.update(updatePetInput.id, updatePetInput); // Update a pet
  }

  @Mutation(() => Pet) // You can also return a success message here if you prefer
  removePet(@Args('id', { type: () => Int }) id: number) {
    return this.petService.remove(id); // Remove a pet by ID
  }
}
