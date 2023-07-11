'use strict'

module.exports = {
  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'Davi',
        lastName: 'Batista',
        email: 'davi@email.com',
        phone: '(11) 95551-2212',
        bio: "I'm a Full-Stack JavaScript/TypeScript developer who likes to code and solve stuff!",
        about: 'Full-Stack TypeScript Developer',
        birthDate: new Date('28/12/2001'),
        role: 'admin',
        password: 'david123',
        openToWork: true
      },

      {
        firstName: 'Lucas',
        lastName: 'Andrade',
        email: 'lucas@email.com',
        phone: '(11) 92111-6102',
        bio: "I'm a Back-End Java Developer addicted to data.",
        about: 'Back-End Java Developer',
        birthDate: new Date('11/02/1999'),
        role: 'user',
        password: 'david123',
        openToWork: true
      },
    ])
  },

  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};