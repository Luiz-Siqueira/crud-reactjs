const Sequelize = require("sequelize");

const connection = new Sequelize('user_table','root','',{
    host:'127.0.0.1',
    dialect:'mysql',
    define: {
        timestamps: false
    }
})

module.exports = connection;
