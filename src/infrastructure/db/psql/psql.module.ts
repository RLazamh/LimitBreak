import { Module } from '@nestjs/common';
import { PsqlService } from './psql.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => typeOrmConfig,
    }),
  ],
  providers: [PsqlService],
})
export class PsqlModule {}
