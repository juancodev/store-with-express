const {
  Client
} = require('pg');

//create connection with a client

async function getConnection() {

  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'juancodev',
    password: 'jmontilla123',
    database: 'mystore'
  });
  await client.connect();

  return client;
}

module.exports = getConnection;
