const ApplicationModel = (sequelize, Sequelize) => {
  return sequelize.define('application', {
    id: { type: Sequelize.INTEGER },
    first_name: { type: Sequelize.STRING },
    last_name: { type: Sequelize.STRING },
    levelOfStudy: { type: Sequelize.STRING },
    major: { type: Sequelize.STRING },
    shirtSize: { type: Sequelize.STRING },
    gender: { type: Sequelize.STRING },
  });
};

export default ApplicationModel;
