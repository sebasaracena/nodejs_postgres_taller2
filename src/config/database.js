require("./config")

const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: process.env.urlPostgres,
    database: "tienda",
    password: "postgres",
    port: 5432,
  });
 


  module.exports = pool;