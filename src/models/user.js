import ApplicationModel from './application';

const UserModel = (sequelize, Sequelize) => {
  return sequelize.define('user', {
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    verified: { type: Sequelize.BOOLEAN },
    application_id: { type: Sequelize.INTEGER },
  });
};

// UserModel.hasOne(ApplicationModel, { foreign_key: 'application_id' }); TODO: associate models during database bootstrapping

export default UserModel;
