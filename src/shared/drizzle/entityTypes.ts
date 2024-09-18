import { bookTable } from '@shared/drizzle/schema';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

export type Book = InferSelectModel<typeof bookTable>;
export type InsertBook = InferInsertModel<typeof bookTable>;
