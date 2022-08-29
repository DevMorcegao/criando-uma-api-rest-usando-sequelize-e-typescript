'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('candidates', [
      {
        name: 'Gabriel',
        bio: "I'm a Full Stack Javascript developer with experience on MERN stack.",
        email: 'morcegao@hotmail.com',
        phone: '9999-9999',
        open_to_work: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Arthur',
        bio: 'Front-end developer | React | Next.js | Typescript',
        email: 'arthur@hotmail.com',
        phone: '8888-8888',
        open_to_work: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Lara',
        bio: 'Back-end developer specialized in Java and Spring Boot.',
        email: 'lara@gmail.com',
        phone: '7777-7777',
        open_to_work: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('candidates', null, {});
  },
};
