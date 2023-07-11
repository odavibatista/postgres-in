'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_tests', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key:  'id'
        },

        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      test_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'tests',
          key:  'id'
        },

        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_tests')

  }
};
