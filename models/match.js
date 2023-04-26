'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Match.belongsTo(models.User, {foreignKey: 'user_id'})
      Match.belongsTo(models.Track, {foreignKey: 'track_id'})
    }
  }
  Match.init({
    user_id: DataTypes.INTEGER,
    track_id: DataTypes.INTEGER,
    date: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};