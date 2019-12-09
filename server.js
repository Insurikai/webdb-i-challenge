const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

//write API endpoints to manage the `accounts` resource, including database logic

//GET
server.get('/', (req,  res)=>{
  db('accounts').then(res.status(200).send)
})
//POST
server.post('/', (req,  res)=>{
  
})
//PUT
server.put('/', (req,  res)=>{
  
})
//DELETE
server.delete('/', (req,  res)=>{
  
})
module.exports = server;