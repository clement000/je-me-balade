import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { PG_CONNECTION } from '../constants';
import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [],
      useFactory: async () => {
        const pool = new Pool({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          user: 'postgres',
          password: process.env.POSTGRES_PASSWORD,
          database: 'postgres',
          synchronize: true,
        });

        return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
      },
    },
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
