require('dotenv').config()
// const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
  host: process.env.NEXT_PUBLIC_MYSQL_HOST,
  port: process.env.NEXT_PUBLIC_MYSQL_PORT,
  database: process.env.NEXT_PUBLIC_MYSQL_DATABASE,
  user: process.env.NEXT_PUBLIC_MYSQL_USER,
  password: process.env.NEXT_PUBLIC_MYSQL_PASSWORD
  }
};



module.exports = config;
