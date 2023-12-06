/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryModule } from './library/library.module';
import { AuthController } from './library/controllers/auth.controller';
import firebase from './library/services/firebase.service';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '4610262eE@',
    database: 'postgres',
    autoLoadModels: true,
    synchronize: true
  }), LibraryModule],
  controllers: [AppController,AuthController],
  providers: [AppService],
})
export class AppModule {}
