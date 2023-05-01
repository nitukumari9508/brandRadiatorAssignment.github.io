// require module is commonjs module system used in mode js 
//

const express = require("express")
const mongoose = require("mongoose")
 const app =  express()
const colors = require("colors")
const cors = require("cors")
const morgan = require("morgan")
const routes  = require("./routes/route")
//const errorMiddleware = require("./middleware/errorMiddleware")
// middleware
 app.use(express.json())
 app.use(cors())
 app.use(morgan('dev'))
  
 // connect to db
 mongoose.connect("mongodb+srv://nitukumari:Kashyapnitu8271@cluster0.5uwtnyo.mongodb.net/reactWebsite",{useNewUrlParser:true}).then(()=>{
    
 }).catch((error)=>{
    console.log(error, "mongodb is not connected")
 })
 // testing 
//   app.get("/home", function(req,res){
// res.send("hiiii")
//   })
// // 

app.use("/",routes);
//app.use(errorMiddleware)
 app.listen(3001,function(){
    console.log(`server is running in ${3001} `.bgCyan.yellow)
 }) 
 
 // mvc - model- view- controller application divide  into three parts model under database design & view under frontend 
 // library  & controller under logic part with the help of mvc this application robust , scalable 
 // how it work in industry many developers  many developer work on like controller part , some developer work on model
 // development process is  fast easy to debug  

 

