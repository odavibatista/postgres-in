'use strict'

module.exports = {
  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        first_name: 'Davi',
        last_name: 'Batista',
        email: 'davi@email.com',
        phone: '(11) 95551-2212',
        bio: "I'm a Full-Stack JavaScript/TypeScript developer who likes to code and solve stuff!",
        about: 'Full-Stack TypeScript Developer',
        birth_date: '2001-12-28',
        role: 'admin',
        password: 'david123',
        open_to_work: true,
        created_at: new Date(),
        updated_at: new Date()
      },

    ])
  },

  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};