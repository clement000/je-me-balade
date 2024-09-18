import { serial, text, pgTable } from 'drizzle-orm/pg-core';

export const bookTable = pgTable('book', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  author: text('author').notNull(),
});
