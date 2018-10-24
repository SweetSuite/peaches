import { sequelize, Sequelize } from '../db';

import ApplicationModel from './application';
import UserModel from './user';

const Application = ApplicationModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

function init_sequlize(force_sync) {
  User.hasOne(Application, { foreign_key: 'application_id' });
  sequelize.sync({ force: force_sync });
}

export { Application, User, init_sequlize };
