import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { DrizzleModule } from 'src/shared/drizzle/drizzle.module';
import { BookRepository } from 'src/books/bookRepository';

@Module({
  imports: [DrizzleModule],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})
export class BooksModule {}
