import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { OwnerModule } from './owner/owner.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import {DatabaseModule} from "./db/database.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Fixed `join` usage
    }),
    DatabaseModule,
    PetModule,
    OwnerModule,
  ],
})
export class AppModule {}
