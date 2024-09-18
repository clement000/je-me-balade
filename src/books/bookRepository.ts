import { Injectable } from '@nestjs/common';
import { DrizzleProvider } from '@shared/drizzle/drizzleProvider';
import { BaseRepository } from '@shared/drizzle/baseRepository';
import { Book, InsertBook } from '@shared/drizzle/entityTypes';
import { bookTable } from '@shared/drizzle/schema';

@Injectable()
export class BookRepository extends BaseRepository {
  constructor(drizzleProvider: DrizzleProvider) {
    super(drizzleProvider);
  }

  async getBooks(): Promise<Book[]> {
    const books = await this.db.select().from(bookTable);
    return books;
  }

  async addBook(bookToAdd: InsertBook): Promise<Book> {
    const insertedBooks = await this.db
      .insert(bookTable)
      .values([bookToAdd])
      .returning();

    return insertedBooks[0];
  }
}
