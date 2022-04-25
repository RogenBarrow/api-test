const express = require('express')
const app = express()
const PORT = 32;

const database = {
    "name": "Nathifa",
    "lastName": "Oleana"
}

app.listen(
    PORT,
    console.log(`http://localhost:${PORT}`)
);

app.get('/data', (req, res) => 
    res.status(200).send(database));
    