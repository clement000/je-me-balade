import { Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { schema } from '@shared/drizzle/schema';
import { DrizzleProvider } from '@shared/drizzle/drizzleProvider';

@Injectable()
export class BaseRepository {
  db: NodePgDatabase<typeof schema>;

  constructor(drizzleProvider: DrizzleProvider) {
    this.db = drizzleProvider.db;
  }
}
