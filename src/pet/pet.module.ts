import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetService } from './pet.service';
import { PetResolver } from './pet.resolver';
import { Pet } from './entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])], // Import Pet entity
  providers: [PetService, PetResolver],
})
export class PetModule {}
