'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
        {
        name: 'Nubank',
        bio: 'Nubank is a Brazilian neobank and the largest fintech bank in Latin America. Its headquarters are located in São Paulo, Brazil. The company also has engineering offices in Berlin, Germany, Buenos Aires, Argentina, and an office in Mexico City, Mexico.',
        website: 'https://nubank.com.br',
        email: 'email@nubank.com.br',
        created_at: new Date(),
        updated_at: new Date()
        },
        
        {
        name: 'Magazine Luiza',
        bio: 'Criado na década de 50, em Franca, no interior de São Paulo, o Magazine Luiza tornou-se uma companhia orientada por ciclos de desenvolvimento.',
        website: 'https://magazineluiza.com.br',
        email: 'magazineluiza@email.com',
        created_at: new Date(),
        updated_at: new Date()
        },

        {
        name: 'Shopee',
        bio: 'Shopee Pte. Ltd., doing business as Shopee, is a Singaporean multinational technology company specialising in e-commerce.',
        website: 'https://shopee.com.br',
        email: 'contact@shopee.com',
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: 'Petrobras',
        bio: 'We are a a publicly-held corporation that operates in an integrated and specialized manner in the oil, natural gas and energy industry.',
        website: 'https://petrobras.com.br/en/about-us/',
        email: 'contato@petrobras.com.br',
        created_at: new Date(),
        updated_at: new Date()
      },
        
      {
        name: 'Americanas',
        bio: 'Lojas Americanas is a Brazilian retail chain founded in 1929 in the city of Niterói, Rio de Janeiro.',
        website: 'https://www.americanas.com.br',
        email: 'atendimento.acom@americanas.com',
        created_at: new Date(),
        updated_at: new Date()
      },
  
      {
        name: 'Mercado Libre',
        bio: 'MercadoLibre, Inc. is an Argentine company headquartered in Montevideo, Uruguay, incorporated in the United States that operates online marketplaces dedicated to e-commerce and online auctions.',
        website: 'https://www.mercadolivre.com.br',
        email: 'contacto@mercadolibre.com',
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        name: 'Vale', 
        bio: 'Vale is a Brazilian multinational corporation engaged in metals and mining and one of the largest logistics operators in Brazil',
        website: 'https://www.vale.com/en', 
        email: 'info@vale.com', 
        created_at: new Date(), 
        updated_at: new Date()
      }, 
      
      {
        name: 'Tam',
        bio: 'TAM Linhas Aéreas is the largest Brazilian airline by market share, and second largest in number of destinations.',
        website: 'https://www.tam.com.br/en',
        email: 'centraldearq@tam.com.br',
        created_at: new Date(),
        updated_at: new Date()
      }, 
      
      {
        name: 'Marisa',
        bio: 'Marisa is a Brazilian fashion retailer, founded in 1948 in the city of São Paulo.',
        website: 'https://www.marisa.com.br/',
        email: 'atendimento@marisa.com.br',
        created_at: new Date(),
        updated_at: new Date()
      }, 
      
      {
        name: 'BRF',
        bio: 'BRF is a Brazilian multinational food company, present in more than 150 countries, with net revenue of R$34.3 billion in 2019.',
        website: 'https://www.brf-global.com/',
        email: 'assessoriadeprensa@brf-global.com',
        created_at: new Date(),
        updated_at: new Date()
      },

      {   
        name: 'Gerdau',   
        bio: 'Gerdau is a Brazilian multinational steelmaking company headquartered in Porto Alegre. It has operations in 14 countries and is the largest producer of long steel in the Americas.',   
        website: 'https://www.gerdau.com/ ',   
        email: 'atendimento@gerdau.com',   
        created_at: new Date(),   
        updated_at: new Date() 
      },   
      
      {   
        name: 'Embraer',   
        bio: 'Embraer, a Brazilian aerospace conglomerate, produces commercial, military, executive and agricultural aircraft and provides aeronautical services.',   
        website: 'https://www.embraer.com/en',   
        email: 'contato@embraer.com',   
        created_at: new Date(),   
        updated_at: new Date() 
      },   
      
      {   
        name: 'Natura',   
        bio: 'Natura is a Brazilian manufacturer and the largest beauty company in Latin America. It is one of the most sustainable companies in the world.',   
        website: 'https://www.natura.com.br/',  
        email: 'assistencia@natura.com.br',   
        created_at: new Date(),   
        updated_at: new Date() 
      },  
      
      {   
        name: 'Itaú Unibanco',   
        bio: 'Itaú Unibanco is the largest Brazilian financial conglomerate, the fifth largest bank in the Americas, and the largest private bank in Latin America.',  
        website: 'https://www.itau.com.br/',   
        email: 'contato@itau.com.br',   
        created_at: new Date(),   
        updated_at: new Date() } 
  ])
  },
  //@ts-ignore -> Typing these modules will throw a syntax error on Sequelize
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  }
};
