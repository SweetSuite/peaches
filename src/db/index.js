import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialectOptions: {
    ssl: true,
  },
  dialect: 'postgres',
  operatorsAliases: false,
});

export { sequelize, Sequelize };
