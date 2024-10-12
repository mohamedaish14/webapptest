const dotenv=require('dotenv')
dotenv.config({path:'config.env'})



const sql = require('mssql');

const config = {
    user: process.env.DB_USER,         // Your database admin username
    password: process.env.DB_PASS,     // Your database password
    server: process.env.DB_SERVER,     // Azure SQL server name
    database: process.env.DB_NAME,     // Database name
    options: {
        encrypt: true,                 // Use encryption (recommended for Azure SQL)
        enableArithAbort: true
    }
};

async function connectDB() {
    try {
        await sql.connect(config);
        console.log('Connected to Azure SQL Database');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

module.exports = connectDB;












// const Sequelize= require('sequelize');
// const sequelize=new Sequelize(process.env.databaseName,'root',process.env.password,{
//    port:3306,
//     dialect:'mysql',
//     host:'localhost'
// });
// // const sequelize = new Sequelize("sql8706699", "sql8706699", 'ZkJf4GqfXX', {
// //     host: 'sql8.freesqldatabase.com',
// //     port: '3306',
// //     dialect: 'mysql',
// //     dialectOptions: {
// //         ssl: false // Disable SSL
// //       }
// //   }); 
// module.exports=sequelize;