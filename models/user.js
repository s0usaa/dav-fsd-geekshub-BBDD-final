'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {foreignKey: "roles_id"}),
      User.belongsTo(models.Coach, {foreignKey: "coaches_id"}),
      User.hasMany(models.Match, {foreignKey: "user_id"})
    }
  }
  User.init({
    roles_id: DataTypes.INTEGER,
    coaches_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    level: DataTypes.FLOAT,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};