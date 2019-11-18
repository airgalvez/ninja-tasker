module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Tasks", {
    todo: { type: DataTypes.STRING }
  });
  return Task;
};
