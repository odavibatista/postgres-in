'use strict'

module.exports = {
  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tests', [
      {
        name: "HTML",
        stacks: "Markup, Metadata, Tags.",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "CSS",
        stacks: "Styling, Mixins, Spacing, Measures.",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "JavaScript",
        stacks: "Objects, Logics, Arrays.",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Java",
        stacks: "Object-Oriented-Programming (OOP), Data, Lifecycles.",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Angular (Framework)",
        stacks: "Components, Styling, Services.",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "React.js",
        stacks: "Components, Hooks, States, Calls.",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Ruby on Rails",
        stacks: "Data, Stats, Informations.",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "R (Programming Language)",
        stacks: "Algorithms, Data, Calculations.",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Python",
        stacks: "Data, modules, lists.",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "PHP",
        stacks: "Arrays, Tags, Informations.",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "Object Oriented Programming (O.O.P.)",
        stacks: "Objects, States, Data.",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: "C (Programming Language)",
        stacks: "Data, Algorithms, Executions.",
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  },

  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tests', null, {});
  }
};