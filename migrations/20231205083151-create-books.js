/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add your schema changes here
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Undo the changes made in the up function
    await queryInterface.dropTable('books');
  }
};
