const connectToMongo = require('./db')
const express = require("express");
const app = express();
const port = 5000;

// packages
const cors = require('cors')
const bodyparser = require('body-parser');
const { body, validationResult } = require('express-validator');

// db
const KeyStore = require("./models/apikeys");
const MessageStore = require('./models/message');

// hashing algo
const md5 = require('md5');
const sha256 = require('sha256');

// mailer
const Mailer = require('./mailer');


app.use(bodyparser.json()); // support json encoded bodies
app.use(bodyparser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors()); // support cross-origin requests

// connect to database
connectToMongo();


app.post('/user/new', [
    body('email', 'Enter a valid email address').isEmail(),
], async (req, res) => {

    // generating public and private keys
  
})

app.post('/msg/new', [
    body('sKey', 'Invalid key senders key').isString(),
    body('rKey', 'Invalid key recievers key').isString(),
    body('sKey', 'Invalid key senders key').isLength({ min: 64, max: 64 }),
    body('rKey', 'Invalid key recievers key').isLength({ min: 32, max: 32 }),
    body('message', 'Enter a valid message').isLength({ min: 1, max: 2000 }),
], async (req, res) => {

    // sending a new message

})


app.get('/msg/view', [
    body('priKey', 'Invalid key private key').isString(),
    body('priKey', 'Invalid key private key').isLength({ min: 64, max: 64 }),
], async (req, res) => {

   // viewing messages

})
 

app.listen(process.env.PORT || port, () => {
    console.log(`Server started on  port ${port}`);
})


