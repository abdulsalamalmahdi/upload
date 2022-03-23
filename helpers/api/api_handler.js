import nc from 'next-connect';
import { upload } from 'helpers/uploads.controller';

//import { acl, apiLimiter, bearerAuth } from '/path/to/middlewares';

const baseHandler = 
      nc({
        attachParams: true,
        onError: (err, req, res, next) => {
          console.error(err.stack);
          res.status(500).end("Something broke!");
        },
        onNoMatch: (req, res) => {
          res.status(404).end("Page is not found");
        },
      })
        // .get((req, res) => {
        //   res.send("Hello world");
        // })
        // .post((req, res) => {
        // res.send('success')
        // })
        // .put(async (req, res) => {
        //   res.end("async/await is also supported!");
        // })
        // .patch(async (req, res) => {
        //   throw new Error("Throws me around! Error can be caught and handled.");
        // });
  
      
    



// export const secureHandler = baseHandler()
//   .use(apiLimiter)
//   .use(bearerAuth)
//   .use(acl);


// /pages/api/index.js
// import nc from 'next-connect';
// import { secureHandler } from '/path/to/handlers';
// const handler = nc()
//   .use(secureHandler) // benefits from all above middlewares
//   .get((req, res) => {
//     res.send('Hello world');
//   });




  

export{baseHandler}

