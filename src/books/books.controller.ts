import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from 'src/books/books.service';
import { InsertBook } from 'src/drizzle/schema';

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
