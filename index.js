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
app.use(express.json());
app.use(cors());


//schema
const schema = {
    name: String,
    lastName: String
}

//model
const monModel = mongoose.model("name", schema);

app.listen(
    PORT,
    console.log(`http://localhost:${PORT}`)
);

app.get('/data', (req, res) => 
    res.status(200).json(database));

const message = {
        message: 'Post created successfully!',
        post: {
          id: new Date().toISOString()
        }
      };    

app.post('/user', (req, res) => {


    if (!req.body.name) return res.status(400).send("Name Not received");
    if (!req.body.lastName) return res.status(400).send("Last Name Not received");
    
    console.log("User Add request received for " + req.body.name);
    console.log("User Add request received for " + req.body.lastName);
    

    const data = new monModel({
        name:req.body.name,
        lastName:req.body.lastName
    });

    // Log to console that you saved to db successfully pls
    const val = data.save();
     

    // Create a response Object outside of the res function pls
    res.status(201).json(message);
      
    }); 
    
    