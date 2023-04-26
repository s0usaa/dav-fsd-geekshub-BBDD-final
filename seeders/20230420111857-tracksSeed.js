'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
      await queryInterface.bulkInsert('Tracks', [
        {id:1, track_number:1, type: "Cubierta", createdAt:new Date(), updatedAt:new Date()},
        {id:2, track_number:2, type: "Cubierta", createdAt:new Date(), updatedAt:new Date()},
        {id:3, track_number:3, type: "Descubierta", createdAt:new Date(), updatedAt:new Date()},
        {id:4, track_number:4, type: "Descubierta", createdAt:new Date(), updatedAt:new Date()},
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
