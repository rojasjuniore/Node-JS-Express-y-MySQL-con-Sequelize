'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  usuario.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.CHAR,
      timestamps: false,
      freezeTableName: true,
      tableName: 'usuario',
      classMethods: {}
    }
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};