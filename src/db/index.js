import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();
const { PORT, DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialectOptions: {
    ssl: true,
  },
  dialect: 'postgres',
  operatorsAliases: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export { sequelize, Sequelize };