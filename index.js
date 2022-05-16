const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const PORT = 32;
const createPost = require('./controler/post');


//db.js

const mongoose = require('mongoose');
const res = require('express/lib/response');

const url = `mongodb+srv://rogen-test:apitesting@cluster0.jomao.mongodb.net/user?retryWrites=true&w=majority`;

const connectionParams={
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

//middlewhere     
app.use(bodyParser.json());
app.use(cors());

const database = {
    "name": "Nathifa",
    "lastName": "Oleana"
}

app.listen(
    PORT,
    console.log(`http://localhost:${PORT}`)
);

app.get('/data', (req, res) => 
    res.status(200).json(database));

app.post('/user', (req, res) => {
    const user = req.body.user
    res.status(201).json({
        message: 'Post created successfully!',
        post: {
          id: new Date().toISOString(),
          user: user,
        }
      });
    }); 
    