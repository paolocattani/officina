'use strict';

export default (sequelize, DataTypes) => {
  const card = sequelize.define('card', {
    problem   : DataTypes.STRING(2048),
    solution  : DataTypes.STRING(2048),
    carModel  : DataTypes.STRING,
    solved    : DataTypes.BOOLEAN,
    resolution_date : DataTypes.DATEONLY
  }, {});
  card.associate = function(models) {
    // associations can be defined here
  };
  return card;
};