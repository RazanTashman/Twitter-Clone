const express =require("express")
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require("./router")
const app = express ()
app.use(bodyParser.json()); 
app.use(cors());
app.use('/', router);

let port = process.env.port || 4000
app.listen(port, ()=> console.log(`localhost:${port}`))

module.exports = app