const express = require('express')
const {Pool}=require ('pg')

const app= express()

const pool=new Pool({
    // host:"My_db",
    // user:"postgres",
    // password:"AppSecrets",
    // database:'postgres',
    // port:5432
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT
});
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows[0]);
});
app.listen(3000,()=>console.log("Server running"))
