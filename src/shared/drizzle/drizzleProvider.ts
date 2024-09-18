import { Injectable } from '@nestjs/common';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { schema } from '@shared/drizzle/schema';
import { Pool } from 'pg';

@Injectable()
export class DrizzleProvider {
  db: NodePgDatabase<typeof schema>;

  constructor() {
    const pool = new Pool({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      database: 'postgres',
      logger: true,
    });

    this.db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
  }
}
