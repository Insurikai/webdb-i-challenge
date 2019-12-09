const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

//write API endpoints to manage the `accounts` resource, including database logic

//GET
server.get('/', (req,  res)=>{
  db('accounts').then(accounts => {
    res.status(200).send(accounts)
  })
})
server.get('/:id', (req, res)=>{
  db('accounts').where({id: req.params.id}).then(account => {
    res.status(200).send(account)
  })
})
//POST
server.post('/', (req,  res)=>{
  db('accounts').insert(req.body).then( id =>{
    res.status(201).send(id)
  });
})
//PUT
server.put('/:id', (req,  res)=>{
  db('accounts').where({id: req.params.id}).update(req.body).then(changes => {
    res.status(200).send(`Made ${changes} change(s).`)
  })
})
//DELETE
server.delete('/:id', (req,  res)=>{
  db('accounts').where({id: req.params.id}).del().then(changes=>{
    res.status(200).send(`Deleted ${changes} account(s).`)
  })
})
module.exports = server;