import { Module } from '@nestjs/common';
import { DrizzleProvider } from '@shared/drizzle/drizzleProvider';

@Module({
  providers: [DrizzleProvider],
  exports: [DrizzleProvider],
})
export class DrizzleModule {}
