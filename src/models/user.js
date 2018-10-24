const UserModel = (sequelize, Sequelize) => {
  return sequelize.define('user', {
    email: { type: Sequelize.STRING, unique: true, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    verified: { type: Sequelize.BOOLEAN, allowNull: false },
    application_id: { type: Sequelize.INTEGER },
  });
};

// UserModel.hasOne(ApplicationModel, { foreign_key: 'application_id' }); TODO: associate models during database bootstrapping

export default UserModel;
