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
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
    });

    this.db = drizzle(pool, { schema, logger: true }) as NodePgDatabase<
      typeof schema
    >;
  }
}
