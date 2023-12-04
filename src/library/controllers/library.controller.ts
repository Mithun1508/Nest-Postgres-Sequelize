/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { Book } from '../models/book.model';
import { LibraryService } from '../services/library.service';
import { FetchAllBooksResponse } from '../responses/library-responses';


// Decorate the controller class with tags and base path
@ApiTags('Books')
@Controller('books')
export class LibraryController {
  // Inject the LibraryService in the constructor
  constructor(private readonly libraryService: LibraryService) {}

  // Decorate the createBook method for Swagger documentation
  @Post()
  @ApiOperation({ summary: 'Create a new book' })
  @ApiBody({ type: Book, description: 'JSON structure for the book object' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Book,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  // Implement the logic for creating a new book
  async createBook(@Res() response, @Body() book: Book): Promise<Book> {
    try {
      // Call the library service to create a new book
      const newBook = await this.libraryService.createBook(book);
      // Return the newly created book in the response
      return response.status(HttpStatus.CREATED).json(newBook);
    } catch (error) {
      // Handle internal server error
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  }

  // Decorate the fetchAll method for Swagger documentation
  @Get()
  @ApiOperation({ summary: 'Get all books' })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: FetchAllBooksResponse, // Use the defined type directly
  })
  // Implement the logic for fetching all books
  async fetchAll(@Res() response): Promise<FetchAllBooksResponse> {
    try {
      // Call the library service to fetch all books
      const books = await this.libraryService.findAll();
      // Create the response object
      const responseObject: FetchAllBooksResponse = { books };
      // Return the response with the list of books
      return response.status(HttpStatus.OK).json(responseObject);
    } catch (error) {
      // Handle internal server error
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  }

  // Decorate the findById method Swagger documentation
  @Get('/:id')
  @ApiOperation({ summary: 'Get a book by ID' })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Book,
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  // Implement the logic for fetching a book by ID
  async findById(@Res() response, @Param('id') id): Promise<Book> {
    try {
      // Call the library service to find a book by ID
      const book = await this.libraryService.findOne(id);
      // Return the found book in the response
      return response.status(HttpStatus.OK).json(book);
    } catch (error) {
      // Handle internal server error
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  }
}
