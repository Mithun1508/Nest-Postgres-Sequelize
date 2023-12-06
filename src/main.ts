/* eslint-disable prettier/prettier */
// main.ts
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create the Nest.js application instance
  const app = await NestFactory.create(AppModule);

  // Swagger document configuration using DocumentBuilder
  const options = new DocumentBuilder()
    .setTitle('Library API') // Set the title of the API
    .setDescription('API for managing books in a library')  // Set the description
    .setVersion('1.0') // Set the API version
    .addServer('http://localhost:8001/', 'Local environment')    // Add server information
    .addServer('https://staging.yourapi.com/', 'Staging')
    .addServer('https://production.yourapi.com/', 'Production')
    .addTag('Books', 'Endpoints for managing books')  // Add a tag for categorization
    .build();

  // Create the Swagger document
  const document = SwaggerModule.createDocument(app, options);

  // Setup Swagger UI, providing the path and document
  SwaggerModule.setup('api-docs', app, document);

  // Start the application, listening on the specified port or default to 2001
  await app.listen(process.env.PORT || 8001);
}

// Call the bootstrap function to start the application
bootstrap();
