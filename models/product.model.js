import { Sequelize, DataTypes, Model } from 'sequelize';
 import {sequelize} from '../lib';

 import config from 'lib/config';
//  const sequelize= new Sequelize(config.db.database, config.db.user, config.db.password, {
//   host: config.host,
//   dialect:'mysql'
// });
class Products extends Model {}

Products.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
 
//   supplier_id: {
//     type: DataTypes.UUID,
//     // defaultValue: DataTypes.UUIDV4,
//     required:true,
//     allowNull:false
//   //  primaryKey: true
//   },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'product' // We need to choose the model name
});

// the defined model is the class itself
console.log(Products === sequelize.models.Products); // true

export{Products}