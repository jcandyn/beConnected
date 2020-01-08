module.exports = function(sequelize, DataTypes) {
  var Contacts = sequelize.define("Contacts", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    contacted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });
  return Contacts;
};
