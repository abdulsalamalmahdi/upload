import { upload, baseHandler } from 'helpers';
import { sequelize } from 'lib';
import { init, Suppliers, Products} from 'models';
import { supplierController, productController } from 'controllers';
import nc from 'next-connect';



const handler = baseHandler.get( async (req, res)=>{
 

    const {
        query: { id, name },
        method,
      } = req

  init()



   res.status(400).json(__dirname)
})

 
export default handler;

