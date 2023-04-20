'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roles_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Roles",
          key:"id"
        }
      },
      coaches_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Coaches",
          key: "id"
        }
      },
      name: {
        type: Sequelize.STRING,
        required: true,
        len: [2,20]
      },
      surname: {
        type: Sequelize.STRING,
        required: true,
        len: [2,50]
      },
      level: {
        type: Sequelize.FLOAT,
        required: true,
      },
      email: {
        type: Sequelize.STRING,
        required: true,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        required: true,
        len: [5,16]
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};