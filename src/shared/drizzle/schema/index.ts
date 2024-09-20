import { userTable } from '@shared/drizzle/schema/user';
import { outingTable } from '@shared/drizzle/schema/outing';

export * from './outing';
export * from './user';

export const schema = { outingTable, userTable };
