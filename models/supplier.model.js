const { Sequelize, DataTypes, Model } = require('sequelize');
 const {sequelize}= require('../lib/db')

class Suppliers extends Model {}

Suppliers.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'suppliers' // We need to choose the model name
});

// the defined model is the class itself
console.log(Suppliers === sequelize.models.Suppliers); // true

export{Suppliers}