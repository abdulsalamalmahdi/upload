import { Sequelize, DataTypes, Model } from 'sequelize';
 import {sequelize} from '../lib/db';

class Images extends Model {}

Images.init({
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

  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
 
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'image' // We need to choose the model name
});

// the defined model is the class itself
console.log(Images === sequelize.models.Images); // true

export{Images}