import { Injectable } from '@nestjs/common';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {
  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>) {}

  async create(createPetInput: CreatePetInput) {
    const pet = this.petRepository.create(createPetInput); // Create a new instance of Pet
    return await this.petRepository.save(pet); // Save the new pet
  }

  async findAll() {
    return await this.petRepository.find(); // Return all pets
  }

  async findOne(id: number) {
    return await this.petRepository.findOne({ where: { id } }); // Find one pet by ID
  }

  async update(id: number, updatePetInput: UpdatePetInput) {
    await this.petRepository.update(id, updatePetInput); // Update pet by ID
    return this.findOne(id); // Return the updated pet
  }

  async remove(id: number) {
    const pet = await this.findOne(id); // Check if the pet exists
    if (pet) {
      await this.petRepository.delete(id); // Delete the pet
      return pet; // Return the deleted pet
    }
    throw new Error(`Pet with ID ${id} not found`); // Handle not found case
  }
}
