import { Module } from '@nestjs/common';
import { PsqlModule } from './psql/psql.module';

@Module({
  providers: [PsqlModule],
})
export class DbModule {}
