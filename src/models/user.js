import ApplicationModel from './application';

const UserModel = (sequelize, Sequelize) => {
  return sequelize.define('user', {
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    application_id: {
      type: Sequelize.INTEGER,
      references: {
        model: ApplicationModel,
        key: 'id',
      },
    },
  });
};

export default UserModel;
