/* eslint-disable prettier/prettier */
// library/controllers/library.controller.ts
import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody, ApiOperation, ApiParam } from '@nestjs/swagger'; // Import additional decorators
import { Book } from '../models/book.model';
import { LibraryService } from '../services/library.service';

@ApiTags('Books')
@Controller('books')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new book' }) // Add a summary for the operation
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    type: Book,
    description: 'JSON structure for the book object',
  })
  async createBook(@Res() response, @Body() book: Book) {
    try {
      const newBook = await this.libraryService.createBook(book);
      return response.status(HttpStatus.CREATED).json({
        newBook,
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: 'Internal Server Error',
      });
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all books' }) // Add a summary for the operation
  @ApiResponse({ status: 200, description: 'OK' })
  async fetchAll(@Res() response) {
    try {
      const books = await this.libraryService.findAll();
      return response.status(HttpStatus.OK).json({
        books,
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: 'Internal Server Error',
      });
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get a book by ID' }) // Add a summary for the operation
  @ApiParam({ name: 'id', description: 'ID of the book' }) // Add a parameter description
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  async findById(@Res() response, @Param('id') id) {
    try {
      const book = await this.libraryService.findOne(id);
      return response.status(HttpStatus.OK).json({
        book,
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: 'Internal Server Error',
      });
    }
  }
}
