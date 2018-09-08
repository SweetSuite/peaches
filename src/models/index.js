import { sequelize, Sequelize } from '../db';

import ApplicationModel from './application';
import UserModel from './user';

const Application = ApplicationModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

export { Application, User };
