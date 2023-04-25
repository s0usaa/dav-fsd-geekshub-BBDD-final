'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Match_User.belongsTo(models.User, {foreignKey: 'user_id'})
      Match_User.belongsTo(models.Match, {foreignKey: 'match_id'})
    }
  }
  Match_User.init({
    user_id: DataTypes.INTEGER,
    match_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Match_User',
  });
  return Match_User;
};