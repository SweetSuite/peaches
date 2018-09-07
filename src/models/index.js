import { sequelize, Sequelize } from '../db';

import ApplicationModel from './application';
import UserModel from './user';

const Application = ApplicationModel(sequelize, Sequelize);
const UserModel = UserModel(sequelize, Sequelize);
