/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody, ApiOperation } from '@nestjs/swagger';
import { Book } from '../models/book.model';
import { LibraryService } from '../services/library.service';
import { FetchAllBooksResponse } from '../responses/library-responses';

@ApiTags('Books')
@Controller('books')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new book' })
  @ApiBody({ type: Book, description: 'JSON structure for the book object' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: Book })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 422, description: 'Unprocessable Entity.' }) // Added for failed 422 responses
  async createBook(@Res() response, @Body() book: Book): Promise<Book> {
    try {
      const newBook = await this.libraryService.createBook(book);
      return response.status(HttpStatus.CREATED).json(newBook);
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  }

  //sending the struct of data as well
  // controllers return type is a Promise<FetchAllBooksResponse> and set the Swagger logs to that object.
  @Get()
  @ApiOperation({ summary: 'Get all books' })
  @ApiResponse({ status: 200, description: 'OK', type: FetchAllBooksResponse })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found' }) // Added for 404 responses
  async fetchAll(@Res() response): Promise<FetchAllBooksResponse> {
    try {
      const books = await this.libraryService.findAll();
      const responseObject: FetchAllBooksResponse = { books };
      return response.status(HttpStatus.OK).json(responseObject);
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get a book by ID' })
  @ApiResponse({ status: 200, description: 'OK', type: Book })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async findById(@Res() response, @Param('id') id): Promise<Book> {
    //create an object and set response for it 
    try {
      const book = await this.libraryService.findOne(id);
      return response.status(HttpStatus.OK).json(book);
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  }
}
