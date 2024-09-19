import { authorTable } from '@shared/drizzle/schema/author';
import { bookTable } from '@shared/drizzle/schema/book';

export * from './book';
export * from './author';

export const schema = { bookTable, authorTable };
