import { Suppliers } from "./supplier.model" ;
import  { Products } from "./product.model";
import { sequelize } from  "../lib" ;
import  { relate } from "./relations.model";
import { suppliers } from "pages/api/suppliers";
import { Images } from"./image.model";

const init= async()=>{


   
    try {
  
    await sequelize.authenticate();
    
    console.log('Connection has been established successfully.');
    //   relate();
     Products.hasMany(Suppliers)
    Suppliers.belongsTo(Products)

 Products.hasMany(Images);
 Images.belongsTo(Products);
    await sequelize.sync().then(()=>console.log('all synced up')).catch(err=>console.log(err));
    // await model.sync();
   
   
  

   
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


export {
   Suppliers,
   Products,
   Images,
    init
}