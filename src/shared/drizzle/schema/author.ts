import { serial, text, pgTable } from 'drizzle-orm/pg-core';

export const authorTable = pgTable('author', {
  id: serial('id').primaryKey(),
  firstName: text('firstName').notNull(),
  lastName: text('lastName').notNull(),
  description: text('description').notNull(),
});
