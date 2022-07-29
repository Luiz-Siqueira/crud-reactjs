const Sequelize = require("sequelize");

const connection = require('./database');

//criando tabela no banco de dados
const User = connection.define('user',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }

});


User.sync({force:false}).then(()=>{});


module.exports = User;