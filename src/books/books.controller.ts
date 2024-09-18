import { Body, Controller, Get, Post } from '@nestjs/common';
import { InsertBook } from '@shared/drizzle/entityTypes';
import { BooksService } from 'src/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Post()
  async addBook(@Body() book: InsertBook) {
    await this.booksService.addBook(book);
  }
}
