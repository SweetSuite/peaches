import ApplicationModel from './application';

const UserModel = (sequelize, Sequelize) => {
  return sequelize.define('user', {
    id: { type: Sequelize.INTEGER, allowNull: false },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    application_id: {
      type: Sequelize.INTEGER,
      references: {
        model: ApplicationModel,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  });
};
