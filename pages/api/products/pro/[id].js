// import { upload, baseHandler } from 'helpers';
// import { sequelize } from 'lib';
// import { init, Suppliers, Products} from 'models';
// import { supplierController, productController } from 'controllers';
 import nc from 'next-connect';



// const handler = baseHandler.get( async (req, res)=>{
 

//     const {
//         query: { id, name },
//         method,
//       } = req

//   init()



//    res.status(400).json(id)
// })

 
// export default handler;
export default nc({
  attachParams: true,
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
}).get((req, res)=> {
  const { id } = req.query
  res.end(`Post: ${id}`)
})

//  function handler(req, res) {
//   const { id } = req.query
//   res.end(`Post: ${id}`)
// }
  


export const config = {
api: {
  bodyParser: false,
},
};

