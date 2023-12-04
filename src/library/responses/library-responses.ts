/* eslint-disable prettier/prettier */
// /src/library/responses/library-responses.ts

import { ApiProperty } from '@nestjs/swagger';
import { Book } from '../models/book.model';

export class FetchAllBooksResponse {
  @ApiProperty({ type: [Book] })
  books: Book[];
}

