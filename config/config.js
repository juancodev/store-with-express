require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.NODE_ENV || 3000,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
}

module.exports = {
  config
}
