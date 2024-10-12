const User = require("../models/user");
const asyncHandeller = require("express-async-handlr");


exports.createUser=asyncHandeller(async (req, res, next) => {

    const user = await User.create({
      name: req.body.name,
    });

    res.status(201).json({ data: user })
  
  });


  exports.getAllUsers = asyncHandeller(async (req, res) => {
   
    
    const users = await User.findAll();
    // const users = await User.findAll();
     res.status(200).json({
     users
    });
  
  })