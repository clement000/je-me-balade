import { Injectable } from '@nestjs/common';
import { InsertOuting, Outing } from '@shared/drizzle/entityTypes';
import { OutingRepository } from 'src/outing/outingRepository';

@Injectable()
export class OutingService {
  outingRepository: OutingRepository;

  constructor(outingRepository: OutingRepository) {
    this.outingRepository = outingRepository;
  }

  async getOutings(): Promise<Outing[]> {
    const outings = await this.outingRepository.getOutings();
    return outings;
  }

  async addOuting(outingToAdd: InsertOuting): Promise<void> {
    await this.outingRepository.addOuting(outingToAdd);
  }
}
