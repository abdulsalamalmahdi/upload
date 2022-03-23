// pages/api/hello.js
//import nc from 'next-connect';
import { upload, baseHandler } from 'helpers';
import { sequelize } from 'lib';
import { init, Suppliers, Products} from 'models';
import { productController } from 'controllers';

const handler = baseHandler
.use(upload.array('fileName'))
.post(async (req, res)=>{
 

 

  init()

 await productController.addPRoduct(req, res)

  // res.status(400).json("dkfjkdjf")
})

 
//nc({
//     onError: (err, req, res, next) => {
//       console.error(err.stack);
//       res.status(500).end("Something broke!");
//     },
//     onNoMatch: (req, res) => {
//       res.status(404).end("Page is not found");
//     },
//   })
//     .use(upload.array('fileName'))
//     .get((req, res) => {
//       res.send("Hello world");
//     })
//     .post((req, res) => {
       
//       res.json({ hello: req.files });
//     })
//     .put(async (req, res) => {
//       res.end("async/await is also supported!");
//     })
//     .patch(async (req, res) => {
//       throw new Error("Throws me around! Error can be caught and handled.");
//     });

  
  export default handler;


//   export const config = {
//     api: {
//       bodyParser: false, // Disallow body parsing, consume as stream
//     },
//   };


export const config = {
api: {
  bodyParser: false,
},
};

