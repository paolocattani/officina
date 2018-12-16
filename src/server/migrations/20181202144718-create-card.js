'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      problem: {
        type: Sequelize.STRING(2048)
      },
      solution: {
        type: Sequelize.STRING(2048)
      },
      carModel: {
        type: Sequelize.STRING
      },
      solved: {
        type: Sequelize.BOOLEAN
      },
      resolution_date: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cards');
  }
};