const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
import getConfig from 'next/config';

import { apiHandler, usersRepo } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();

export default apiHandler({
    post: authenticate
});

async function authenticate(req, res) {
  await  console.log('login')
    const { email, password } = req.body;
  console.log(password)
  const  user=   await usersRepo.find( email)
  .then(u=>{
  
    return u 
    }).catch(err=>err);

    // validate
   
//  if (!(user && bcrypt.compareSync(password,user.password))) {
//         throw 'Username or password is incorrect';
//     }
    if(!user){
      throw 'Username or password is incorrect';    }
      console.log({hashcom: bcrypt.compareSync(password, user.password)})
if(!bcrypt.compareSync(password,user.password)){
 
throw `it is the fucking password ${"password: "+password }`
}
    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.ID }, serverRuntimeConfig.secret, { expiresIn: '7d' });
user.token = token
    // return basic user details and token
    
  res.status(200).json(user);
}