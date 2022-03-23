
require('dotenv').config()
// const mysql = require('mysql2')
import   config from './config';

import  Sq from 'sequelize'
//import knex from 'knex'

// export async function getStaticProps() {
//   return conn= await  mysql.createConnection({
//         host: process.env.MYSQL_HOST,
//         port: process.env.MYSQL_PORT,
//         database: process.env.MYSQL_DATABASE,
//         user: process.env.MYSQL_USER,
//         password: process.env.MYSQL_PASSWORD

//     });
//   }
// const registerService = (name, initFn) => {
//   if (process.env.NODE_ENV === 'development') {
//     if (!(name in global)) {
//       global[name] = initFn();
//     }
//     return global[name];
//   }
//   return initFn();
// };

// export const db = registerService('db', () => knex({
//     client: 'mysql',
//     connection: {
//       host: config.db.host,
//       user: config.db.user,
//       password: config.db.password,
//       database: config.db.database
//     }

//   }

// ));



 const sequelize = new Sq(config.db.database, config.db.user, config.db.password, {
  host: config.host,
  dialect:'mysql'
});


export { sequelize};

// export {excuteQuery}
//  let newRes;
// async function excuteQuery({
//   query,
//   values
// }) {
 
 
//   try {

//     const connection = await mysql.createConnection(config.db);

//     await connection.execute(query, values,async (err, results, fields)=>{

//    if(err) 
//    throw err
//      // results contains rows returned by server
 
//     return newRes= await results
 
//     });
//     // await connection.query(
//     //   `INSERT INTO supplier (name, password, email, phone, first_name, last_name)`,
//     //   ['Cardinal', 'rewrewr3r3234df', '212454545', 'Stavanger', '4006', 'Norway'],
//     //   function(err, results, ) {
//     //     console.log(results); // results contains rows returned by server  
//     //   }
//     // );

  
//   } catch (error) {
// console.log(error)
//     return {
//       error
//     };
//   }

// return newRes
// }