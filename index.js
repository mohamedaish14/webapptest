const express=require('express');
const dotenv=require('dotenv');
const sequelize=require('./utils/database');
const user=require('./models/user');
const userRoutes=require('./routes/user');
dotenv.config({path:'config.env'})
const app=express();
//const allowedOrigins = [];
app.use(express.json());

sequelize.sync({force:true}).then(console.log('connected'))
.catch(err=>{console.log(`err:${err}`)})

app.use('/',userRoutes);


app.listen(process.env.port||3000,()=>{
    console.log('hello  from the serve1')
})