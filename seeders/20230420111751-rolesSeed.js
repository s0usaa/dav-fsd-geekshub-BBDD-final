'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
      await queryInterface.bulkInsert('Roles', [
        {id:1, name: 'Admin', createdAt:new Date(), updatedAt:new Date()},
        {id:2, name: 'User', createdAt:new Date(), updatedAt:new Date()},
        {id:3, name: 'Coach', createdAt:new Date(), updatedAt:new Date()},
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
