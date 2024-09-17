import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/books/entity/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async getBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async getBook(bookId: number): Promise<Book> {
      const book = await this.bookRepository.findOneBy({id: bookId});
      if (!book) {
        throw new HttpException(`Book with id ${bookId} does not exist!`, 404);
      }
      return book;
  }

  async addBook(book: Book): Promise<Book> {
    const savedBook = await this.bookRepository.save(book);
    return savedBook;
  }

  async deleteBook(bookId: number): Promise<void> {
    await this.bookRepository.delete({id: bookId});
  }
}
