const multer = require('multer'),
fs = require('fs');
// const tiffToJPEG = require('./tiffTojpeg');
let DIR = './public/uploads';
console.log('multer', DIR)
const storage = multer.diskStorage({
 
destination: async (req, file, cb) => {

 console.log(req.body.id)

 try {
 
  const exist = await fs.readdirSync(DIR).find(fl => fl === req.body.id);

  if (exist) {

    cb(null, DIR + '/' + req.body.id);

  } else if (!exist) {
    await fs.mkdirSync(DIR + '/' + req.body.id);


    cb(null, DIR + '/' + req.body.id);
  }
} catch (err) {
    console.log(err)
  }

},

filename: async (req, file, cb) => {
 
  
  let extension = file.mimetype.split('/')[1]
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
  const fileName = uniqueSuffix + '.' + extension;
 

  cb(null, fileName);
}
});


const upload = multer({
storage: storage,
// fileFilter: (req, file, cb) => {
  
//   console.log('multer upload')

  
//   if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//     return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//   }
// }
});


export  {upload};


