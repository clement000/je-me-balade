import { Injectable } from '@nestjs/common';
import { DrizzleProvider } from '@shared/drizzle/drizzleProvider';
import { BaseRepository } from '@shared/drizzle/baseRepository';
import { InsertOuting, Outing } from '@shared/drizzle/entityTypes';
import { outingTable } from '@shared/drizzle/schema';

@Injectable()
export class OutingRepository extends BaseRepository {
  constructor(drizzleProvider: DrizzleProvider) {
    super(drizzleProvider);
  }

  async getOutings(): Promise<Outing[]> {
    const outings = await this.db.select().from(outingTable);
    return outings;
  }

  async addOuting(outingToAdd: InsertOuting): Promise<Outing> {
    const insertedOutings = await this.db
      .insert(outingTable)
      .values([outingToAdd])
      .returning();

    return insertedOutings[0];
  }
}
