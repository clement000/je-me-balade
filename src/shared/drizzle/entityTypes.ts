import { userTable, outingTable } from '@shared/drizzle/schema';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

export type User = InferSelectModel<typeof userTable>;
export type InsertUser = InferInsertModel<typeof userTable>;

export type Outing = InferSelectModel<typeof outingTable>;
export type InsertOuting = InferInsertModel<typeof outingTable>;
