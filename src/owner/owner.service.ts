import { Injectable } from '@nestjs/common';
// import { Owner } from './owner.entity';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
// import { CreateOwnerDto } from './dto/create-owner.dto';

@Injectable()
export class OwnerService {
  private owners: Owner[] = [];

  getAllOwners(): Owner[] {
    return this.owners;
  }

  getOwnerById(id: number): Owner {
    return this.owners.find((owner) => owner.id === id);
  }

  createOwner(createOwnerDto: CreateOwnerInput): Owner {
    const newOwner = { id: Date.now(), ...createOwnerDto, pets: [] };
    this.owners.push(newOwner);
    return newOwner;
  }

  updateOwner(id: number, updateOwnerDto: Partial<CreateOwnerInput>): Owner {
    const ownerIndex = this.owners.findIndex((owner) => owner.id === id);
    if (ownerIndex === -1) {
      throw new Error('Owner not found');
    }

    const updatedOwner = { ...this.owners[ownerIndex], ...updateOwnerDto };
    this.owners[ownerIndex] = updatedOwner;
    return updatedOwner;
  }

  // Method to delete an owner
  deleteOwner(id: number): Owner {
    const ownerIndex = this.owners.findIndex((owner) => owner.id === id);
    if (ownerIndex === -1) {
      throw new Error('Owner not found'); // Handle case where owner does not exist
    }

    const deletedOwner = this.owners[ownerIndex]; // Get the owner before deletion
    this.owners.splice(ownerIndex, 1); // Remove the owner from the array
    return deletedOwner; // Return the deleted owner for confirmation
  }
}
