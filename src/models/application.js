const ApplicationModel = (sequelize, Sequelize) => {
  return sequelize.define('application', {
    id: { type: Sequelize.INTEGER },
  });
};

export default ApplicationModel;
