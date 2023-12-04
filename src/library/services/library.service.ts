/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "../models/book.model";

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel(Book)
        private bookModel: typeof Book
    ) {}

    async findAll(): Promise<Book[]> {
        return this.bookModel.findAll();
    }

    findOne(id: string): Promise<Book> {
        return this.bookModel.findOne({
            where: {
                id,
            },
        });
    }

    async createBook(book: Book): Promise<Book> {
        // Ensure 'book' is a plain object
        const bookObject = book.toJSON ? book.toJSON() : book;
        return this.bookModel.create(bookObject);
    }
}