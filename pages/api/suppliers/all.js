import { upload, baseHandler } from 'helpers';
import { sequelize } from '/lib';
import { init, Suppliers, Products} from 'models';
import { supplierController } from 'controllers';

const handler = baseHandler
.get(async (req, res)=>{
 
  init()

const suppliers=  supplierController.getAllSuppliers(req, res)

  


})

 


  
  export default handler;


export const config = {
api: {
  bodyParser: false,
},
};

