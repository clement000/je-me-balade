import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/books/entity/book.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BooksModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      database: 'postgres',
      entities: [Book],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Book]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
