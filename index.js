const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 32;

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
    