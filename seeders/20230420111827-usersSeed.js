const bcrypt = require("bcrypt");
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
      await queryInterface.bulkInsert('Users', [
        {id:1, roles_id:1, coaches_id:1, name: "David", surname: "Sousa", level: 3.5, email: "david@david.com", password:bcrypt.hashSync("12345",10), createdAt:new Date(), updatedAt:new Date()},
        {id:2, roles_id:3, coaches_id:2, name: "Sergio", surname: "Sousa", level: 3.25, email: "sergio@sergio.com", password:bcrypt.hashSync("12345",10), createdAt:new Date(), updatedAt:new Date()},
        {id:3, roles_id:2, coaches_id:2, name: "Alex", surname: "Laguia", level: 2.75, email: "alex@alex.com", password:bcrypt.hashSync("12345",10), createdAt:new Date(), updatedAt:new Date()},
        {id:4, roles_id:3, coaches_id:1, name: "Ruben", surname: "Aguado", level: 4.5, email: "ruben@ruben.com", password:bcrypt.hashSync("12345",10), createdAt:new Date(), updatedAt:new Date()},
        {id:5, roles_id:3, coaches_id:1, name: "Agustin", surname: "Tapia", level: 5.5, email: "agustin@agustin.com", password:bcrypt.hashSync("12345",10), createdAt:new Date(), updatedAt:new Date()},
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
