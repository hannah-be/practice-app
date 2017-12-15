const express = require("express");
const bodyParser = require('body-parser')

const server = express();

server.use(bodyParser.json())

server.get('/', (req, res) => {
  res.json({ message: 'Home page' })
})

server.use('/', [
  require('./routes/attempts')
])


server.listen(8000, () => {
  console.log("started at http://localhost:8000");
});
