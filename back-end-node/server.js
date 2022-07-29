const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")

//Database
const connection = require("./database/database");
const User = require("./database/User");

connection
    .authenticate()
    .then(()=>{
        console.log('connection feita');
    }).catch((e)=>{
        console.log(e);
        console.log('erro na con');
    })


app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.status(404);
});

app.get("/getUser",(req,res)=>{
    User.findAll({raw:true}).then(data =>{
        res.json(data);
    
    }).catch((e)=>{
        console.log(e)
    })
});

app.post("/create",(req,res)=>{
    var {name,email,password} = req.body;
    if (email != '' && name != '' && password != '') {
        User.create({
            nome:name,
            email:email,
            password:password
        }).then(()=>{
            res.status(200);
            res.json({sucess:true,msg:"Cadastro realizado com sucesso!"});
        }).catch(()=>{
            res.status(400);
            res.json({sucess:false,msg:"Falha interna"});
        })    
    }else{
        res.status(400);
        res.json({sucess:false,msg:"Falha interna"});
    }
});


app.listen(process.env.PORT || 5000,()=>{
    console.log("API Rodando");
})

