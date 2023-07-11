'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async up (queryInterface, Sequelize) {
    const [companies] = await queryInterface.sequelize.query('SELECT id FROM companies;');
  
    await queryInterface.bulkInsert('jobs', [
      {
        title: 'Full-stack Javascript Developer',
        description: 'We are looking for a Full-Stack JavaScript developr who knows how to use React, Express, Node.Js and MongoDB (MERN STACK).',
        limit_date: '2023-09-30',
        company_id: companies[0].id,
        created_at: new Date(),
        updated_at: new Date()
      }, 
      
      {
        title: 'Front-end Developer (Vue.js)',
        description: 'We look for a Front-End Developer specialized in Vue.Js and build of Single-Page Applications.',
        limit_date: '2023-08-01',
        company_id: companies[0].id,
        created_at: new Date(),
        updated_at: new Date()
      }, 
      
      {
        title: 'Back-end Developer',
        description: 'We need a Java Developer capable of building applications, and also knows how to use Kotlin for mobile applications.',
        limit_date: '2023-09-01',
        company_id: companies[1].id,
        created_at: new Date(),
        updated_at: new Date()
      },

      { 
        title: 'Python Developer', 
        description: 'We are looking for a Python Developer who can build web applications with frameworks such as Flask and Django.', 
        limit_date: '2023-10-31', 
        company_id: companies[1].id, 
        created_at: new Date(), 
        updated_at: new Date()
      }, 
      
      { 
        title: 'JavaScript Developer (Angular)', 
        description: 'We are looking for a JavaScript Developer experienced with building apps with Angular.', 
        limit_date: '2023-08-15', 
        company_id: companies[2].id, 
        created_at: new Date(), 
        updated_at: new Date()
      }, 

      { 
        title: 'DevOps Engineer', 
        description: 'We are looking for a DevOps Engineer with good experience in configuring cloud environments with AWS, GCP, and Azure.', 
        limit_date: '2023-10-01', 
        company_id: companies[2].id, 
        created_at: new Date(), 
        updated_at: new Date()
      },
      
      {      
        title: 'Ruby on Rails Developer',
        description: 'We are looking for a Ruby on Rails Developer experienced in developing web applications.',
        limit_date: '2023-09-20',
        company_id: companies[3].id,
        created_at: new Date(),
        updated_at: new Date() 
      },

      {
        title: 'iOS Developer',
        description: 'We are looking for an iOS Developer experienced with creating applications, web services, and Apple frameworks.',
        limit_date: '2023-11-30',
        company_id: companies[4].id,
        created_at: new Date(),
        updated_at: new Date() 
      },

      {
        title: 'Android Developer',
        description: 'We are looking for an Android Developer experienced with creating apps for phones and tablets.',      
        limit_date: '2023-12-31',      
        company_id: companies[5].id,      
        created_at: new Date(),      
        updated_at: new Date() 
      },

      {      
        title: 'SEO Specialist',      
        description: 'We are looking for an SEO Specialist with experience in improving search engine rankings and driving organic traffic.',      
        limit_date: '2024-01-15',      
        company_id: companies[6].id,      
        created_at: new Date(),      
        updated_at: new Date() 
      },

      {      
        title: 'Data Analyst',      
        description: 'We are looking for a Data Analyst with experience in analyzing large datasets and creating predictive models and insights.',      
        limit_date: '2024-02-01',      
        company_id: companies[7].id,      
        created_at: new Date(),      
        updated_at: new Date() 
      },
      
      {      
        title: 'Full Stack Developer',      
        description: 'We are looking for a Full Stack Developer with experience in developing front-end and back-end applications.',      
        limit_date: '2024-02-20',      
        company_id: companies[8].id,      
        created_at: new Date(),      
        updated_at: new Date() 
      },

  ])
  },
  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jobs', null, {});
  }
};

