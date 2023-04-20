'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
      await queryInterface.bulkInsert('Coaches', [
        {id:1, especialidad: "Ataque", createdAt:new Date(), updatedAt:new Date()},
        {id:2, especialidad: "Defensa", createdAt:new Date(), updatedAt:new Date()}
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
