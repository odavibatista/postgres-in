'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users',  {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      last_name:  {
        type: Sequelize.STRING,
        allowNull: false
      },

      email:  {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      phone:  {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      bio:  {
        type: Sequelize.TEXT,
        allowNull: true
      },

      about:  {
        type: Sequelize.TEXT,
        allowNull: true
      },

      birth_date: {
        type: Sequelize.DATE,
        allowNull: false
      },

      role: {
        type: Sequelize.STRING,
        allowNull: false
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

      open_to_work: {
        type: Sequelize.BOOLEAN,
      },

      works_at: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'companies',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT'
        },
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  
  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};
