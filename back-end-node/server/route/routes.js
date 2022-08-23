const express = require('express');
const router = express.Router();
const User = require("../data/infoClient");

router.post('/login', async (req, res) => {
        const requisicao = await User.getLogin(req.body.userRequest);
        if (requisicao.rowCount != 0) {
            res.status(200)
            res.json({response:requisicao.rows,status:true});
        }else{
            res.status(401)
            res.json({response:requisicao.rows,status:false});
            console.log('erro');
        }
});

router.post('/register', async (req, res) => {
    let request = {name:'Ricardo', email:'luiz.gome@teste.com',password:'1234567'}
    if (request.name && request.password && request.email ) {
        const requisicao = await User.postRegister(request);
        console.log(requisicao)
        if (requisicao.rowCount != 0) {
            res.status(200)
            res.json({sucess:true,mensage: "Usuario cadastrado com sucess!"});
        }else{
            res.status(401)
            res.json({sucess:false,mensage: "Não foi possivel cadastrar"});
        }
    }
});

router.get('/clients',async (req, res) => {
    const requisicao = await User.getClients();
    if (requisicao.rowCount != 0) {
        res.status(200)
        res.json(requisicao.rows);
    }else{
        res.status(401)
        console.log('erro');
    }

});

module.exports = router;
