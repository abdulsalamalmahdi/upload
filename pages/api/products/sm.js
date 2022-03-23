
import { upload, baseHandler } from 'helpers';
import { sequelize } from 'lib';
import { init, Suppliers, Products} from 'models';
import { productController } from 'controllers';

const handler = baseHandler.get(async (req, res)=>{
 

 

  init()

 

  res.status(400).json(req.url)
})

 

  
  export default handler;

export const config = {
api: {
  bodyParser: false,
},
};

