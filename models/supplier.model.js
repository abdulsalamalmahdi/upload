import  { Sequelize, DataTypes, Model } from 'sequelize';
  import {sequelize} from '../lib';

import config from 'lib/config';
// const sequelize= new Sequelize(config.db.database, config.db.user, config.db.password, {
//   host: config.host,
//   dialect:'mysql'
// });
class Suppliers extends Model {}

Suppliers.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  product_id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
     required:true,
     allowNull:false
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
  modelName: 'supplier' // We need to choose the model name
});

// the defined model is the class itself
console.log(Suppliers === sequelize.models.Suppliers); // true

export{Suppliers}