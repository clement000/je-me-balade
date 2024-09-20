import { userTable } from '@shared/drizzle/schema/user';
import {
  serial,
  text,
  pgTable,
  integer,
  smallint,
  date,
  timestamp,
} from 'drizzle-orm/pg-core';

export const outingTable = pgTable('outing', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  date: date('date'),
  rating: smallint('rating'),
  authorId: integer('author_id')
    .notNull()
    .references(() => userTable.id),
  createdAt: timestamp('created_at').defaultNow(),
});
