import excuteQuery from '../../../lib/db'

export default async (req, res) => {
    try {
        // console.log("req nom", req.body)
      const result = await excuteQuery({
          query:'SELECT * FROM supplier',
        //   values: [req.body.content],
      });
           res.send(result)
  } catch ( error ) {
      res.send(error)
      console.log( error );
  }
  
  
  };


//   import { apiHandler, usersRepo, omit } from 'helpers/api';

// export default apiHandler({
//   get: getUsers
// });

// function getUsers(req, res) {
//   // return users without hashed passwords in the response
//   const response = usersRepo.getAll().map(x => omit(x, 'hash'));
//   return res.status(200).json(response);
// }