const express=require('express');
const dotenv=require('dotenv');
//const sequelize=require('./utils/database');
const connectDB = require('./utils/database');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const user=require('./models/user');
const userRoutes=require('./routes/user');
dotenv.config({path:'config.env'})
const app=express();
const corsOptions = {
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],  
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
  
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'));

// sequelize.sync({force:true}).then(console.log('connected'))
// .catch(err=>{console.log(`err:${err}`)})

connectDB();  // Establish connection to Azure SQL

app.use('/api/names',userRoutes);


app.listen(process.env.port||3000,()=>{
    console.log('hello  from the serve1')
})