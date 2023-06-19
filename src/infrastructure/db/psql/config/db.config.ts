import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'rlaza',
  password: 'rlaza',
  database: 'olympus',
  entities: [UserEntity],
  synchronize: true,
};

export default typeOrmConfig;
