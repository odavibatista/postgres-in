'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tests', {
      id: {
        type: Sequelize.INTEGER,
        allowNull:  false,
        autoIncrement:  true,
        primaryKey: true
      },

      name:  {
        type: Sequelize.STRING,
        allowNull: false,
      },

      applies:  {
        type: Sequelize.INTEGER,
        allowNull:  false
      }
    })
  },

  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tests')
  }
};
