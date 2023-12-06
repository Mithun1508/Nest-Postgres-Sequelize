/* eslint-disable prettier/prettier */
// library/models/book.model.ts
import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Book extends Model {
  [x: string]: any;
  @ApiProperty({ description: 'The name/title of the book' })
  @Column
  bookName: string;

  @ApiProperty({ description: 'The name of the book\'s author' })
  @Column
  authorName: string;

  @ApiProperty({ description: 'The year the book was published' })
  @Column
  publishYear: number;

  @ApiProperty({ description: 'A boolean indicating whether the book is available', default: true })
  @Column({ defaultValue: true })
  isAvailable: boolean;
}
