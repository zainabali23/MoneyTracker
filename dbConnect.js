const mongoose = require('mongoose')

const url = "mongodb+srv://admin:admin@money-tracker.m2tdyk0.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url);

const connection = mongoose.connection

connection.on('error',err=>console.log(err + "not connected"))
connection.on('connected',()=>console.log("monogo db connected"))