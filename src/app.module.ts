import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DrizzleModule } from './shared/drizzle/drizzle.module';
import { OutingModule } from 'src/outing/outing.module';

@Module({
  imports: [
    OutingModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    DrizzleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
