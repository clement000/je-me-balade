import { authorTable, bookTable } from '@shared/drizzle/schema';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

export type Book = InferSelectModel<typeof bookTable>;
export type InsertBook = InferInsertModel<typeof bookTable>;

export type Author = InferSelectModel<typeof authorTable>;
export type InsertAuthor = InferInsertModel<typeof authorTable>;
