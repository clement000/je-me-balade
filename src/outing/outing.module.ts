import { Module } from '@nestjs/common';
import { OutingController } from 'src/outing/outing.controller';
import { OutingService } from 'src/outing/outing.service';
import { OutingRepository } from 'src/outing/outingRepository';
import { DrizzleModule } from 'src/shared/drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  controllers: [OutingController],
  providers: [OutingService, OutingRepository],
})
export class OutingModule {}
