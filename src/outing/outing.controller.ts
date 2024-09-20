import { Body, Controller, Get, Post } from '@nestjs/common';
import { InsertOuting } from '@shared/drizzle/entityTypes';
import { OutingService } from 'src/outing/outing.service';

@Controller('outing')
export class OutingController {
  constructor(private outingService: OutingService) {}

  @Get()
  async getOutings() {
    const outings = await this.outingService.getOutings();
    return outings;
  }

  @Post()
  async addOutings(@Body() outingToAdd: InsertOuting) {
    await this.outingService.addOuting(outingToAdd);
  }
}
