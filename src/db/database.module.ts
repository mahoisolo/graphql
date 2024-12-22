import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Pet } from '../pet/entities/pet.entity';
import { Owner } from '../owner/entities/owner.entity';

@Module({
    imports: [
        ConfigModule.forRoot(), // Ensure .env variables are loaded
        TypeOrmModule.forRoot({
            type: 'postgres', // Database type
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT, // Convert port to number
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: [Pet, Owner], // Your entities
            synchronize: true, // Synchronize DB schema
        }),
    ],
})
export class DatabaseModule { }
//   constructor() {
//     // Log the database connection details
//     console.log({
//       DB_HOST: process.env.DB_HOST,
//       DB_PORT: process.env.DB_PORT,
//       DB_USERNAME: process.env.DB_USERNAME,
//       DB_PASSWORD: process.env.DB_PASSWORD,
//       DB_DATABASE: process.env.DB_DATABASE,
//     });
//   }
// }
