const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")

const client = require("./server/database/database");

client.connect().then(()=>{
    console.log('client connected')
}).catch((err) =>{
    console.log(err)
    console.log('erro na con');
})

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./server/route/routes'))

app.listen(process.env.PORT || 5000,()=>{
    console.log("API Rodando");
})

