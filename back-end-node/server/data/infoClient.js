const Client = require('../database/database');


exports.getClients = function (){
    return Client.query('select * from public.usuario')
}

exports.getLogin = function (req){
    return Client.query(`SELECT email FROM usuario WHERE email = '${req.email}' and password = '${req.password}'`)
}


exports.postRegister = function (req){
    return Client.query(`INSERT INTO public.usuario(name,email,password) VALUES ('${req.name}','${req.email}',${req.password})`)
}



