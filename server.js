const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const Register = require('./Controllers/Register')
const Signin = require('./Controllers/Signin')
const Image = require('./Controllers/Image')
const Profile = require('./Controllers/Profile')

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '123456',
    database : 'smart-brain'
  }
});


const app = express();

app.use(bodyParser.json());
app.use(cors())


app.get('/',(req,res) => {res.send(database.users)})

app.get('/profile/:id', (req,res) => {Profile.handleProfile(req,res,db)})

app.put('/image', (req,res) => {Image.handleImage(req,res,db)})

app.post('/imageurl', (req,res) => {Image.handleApiCall(req,res)})

app.post('/signin', (req,res) => {Signin.handleSignin(req,res,db,bcrypt)})

app.post('/register', (req,res) => {Register.handleRegister(req,res,db,bcrypt)})

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})