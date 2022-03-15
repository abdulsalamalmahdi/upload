
const fs= require('fs')
import formidable from 'formidable';
// import { 
//     apiHandler, 
//     productRepo,
// product_api_handler, upload } from 'helpers/api';

// export default product_api_handler({
//     post: register
// });

export const config = {
  api: {
    bodyParser: false,
  },
};

//  export default async function register(req, res) {

//     // split out password from user details 
    
//   let fls;
//  async (req, res) => {
//   const form = new formidable.IncomingForm();
//   form.uploadDir = "./";
//   form.keepExtensions = true;
//   form.parse(req, (err, fields, files) => {
//     console.log({err, fields, files});
//   fls= {err, fields, files}
//   });
// };
// res.json(fls)
// // const nwProduct= productRepo.create(product);
// //     return res.status(200).json(nwProduct);
// }

export default async (req, res) => {
console.log('jdkfjkd')
const options={
  filename:()=> `file`,
  multiples: true
}
  const form = new formidable.IncomingForm(options);
  form.uploadDir = `./public/uploads/`;
  form.keepExtensions = true;
  // form.on('field', (fieldName, fieldValue) => {
  //   // form.emit('data', { name: 'field', key: fieldName, value: fieldValue });
  
  // let user = fieldName=== "user"? fieldValue:null 
  // console.log(user)
  //    if(fieldName=== "name" ){
  //      console.log({true:fieldValue})
  //      if(user) fs.mkdirSync(form.uploadDir+user+"/"+ fieldValue)
      
  //    }
  //  form.uploadDir=form.uploadDir + fieldValue
  // });
//   form.on ('fileBegin', function(name, file){
//     //rename the incoming file to the file's name
//  console.log('hi')
 
//    file.path = form.uploadDir + "/" + file.name;
   
// })
  form.parse(req, async(err, fields, files) => {

    if (err){
       console.log(err);
  
    }else{
     
      res.status(200).json(files)
    }
   
  });

};