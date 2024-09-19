import { authorTable } from '@shared/drizzle/schema/author';
import { serial, text, pgTable, integer } from 'drizzle-orm/pg-core';

export const bookTable = pgTable('book', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  authorId: integer('author_id')
    .notNull()
    .references(() => authorTable.id),
});
