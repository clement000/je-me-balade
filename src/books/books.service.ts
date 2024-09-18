import { Injectable } from '@nestjs/common';
import { Book, InsertBook } from '@shared/drizzle/entityTypes';
import { BookRepository } from 'src/books/bookRepository';

@Injectable()
export class BooksService {
  bookRepository: BookRepository;

  constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  async getBooks(): Promise<Book[]> {
    const books = await this.bookRepository.getBooks();
    return books;
  }

  async addBook(bookToAdd: InsertBook): Promise<void> {
    await this.bookRepository.addBook(bookToAdd);
  }
}
