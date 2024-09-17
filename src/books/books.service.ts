import { Injectable, Inject } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { PG_CONNECTION } from 'src/constants';
import * as schema from '../drizzle/schema';
import { Book, bookTable, InsertBook } from 'src/drizzle/schema';

@Injectable()
export class BooksService {
  constructor(
    @Inject(PG_CONNECTION) private conn: NodePgDatabase<typeof schema>,
  ) {}

  async getBooks(): Promise<Book[]> {
    const books = await this.conn.select().from(bookTable);
    return books;
  }

  async addBook(bookToAdd: InsertBook): Promise<void> {
    await this.conn.insert(bookTable).values([bookToAdd]);
  }
}
