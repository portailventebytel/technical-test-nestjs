import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/src/migrations/*.js'],
});
