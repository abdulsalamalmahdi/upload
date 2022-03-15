// pages/api/hello.js
//import nc from 'next-connect';
import { upload, baseHandler } from 'helpers';
import { sequelize } from 'lib';
//import { Suppliers } from 'models';

const handler = baseHandler
.use(upload.array('fileName'))
.post(async (req, res)=>{
  try {
   
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    Suppliers.init({
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
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
      modelName: 'suppliers' // We need to choose the model name
    });
    
//     const jane = await Suppliers.create({ firstName: "Jane", lastName: "Doe" });
// console.log("Jane's auto-generated ID:", jane.id);
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  res.status(400).json(req.files)
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

