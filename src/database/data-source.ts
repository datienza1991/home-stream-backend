import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Video } from '../videos/model/video.entity';
import { getSqliteDatabasePath } from './get-database-path';
import { migrations } from './migrations';
const dbPath: string = getSqliteDatabasePath();

export const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: dbPath,
  entities: [Video],
  synchronize: false,
  migrations: migrations,
};

export const AppDataSource = new DataSource(dataSourceOptions);
