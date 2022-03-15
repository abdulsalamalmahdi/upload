const bcrypt = require('bcryptjs');

import { 
    apiHandler, 
    usersRepo } from 'helpers/api';

export default apiHandler({
    post: register
});

 async function register(req, res) {
    // split out password from user details 
  let exists;
 const { password, ...user } = req.body;
  
    // validate
   // console.log({find:usersRepo.find(x => x.username === user.username)})

 exists= await usersRepo.find(user.email)
              .then(u=>{
                         console.log(u)
                         return u}
                         )
              .catch(err=>console.log(err))
   console.log({findresult:exists})
    if (exists)
        throw `User with the fucking email "${user.email}" already exists`;

    // hash password
    user.hash = bcrypt.hashSync(password, 10);    

    usersRepo.create(user);
    return res.status(200).json({});
}