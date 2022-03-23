
import { baseHandler } from 'helpers';
import { usersRepo, omit } from 'helpers/api';
// import handler from '../all';


const handler = baseHandler
.get(async (req, res)=>{
 
  

res.send('kjdkfjdkf')

})

 


  
  export default handler;


export const config = {
api: {
  bodyParser: false,
},
};