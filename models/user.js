const Sequelize=require('sequelize');
const sequelize=require('../utils/database');



const user=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false
    }
},{timestamps: true});

module.exports=user;