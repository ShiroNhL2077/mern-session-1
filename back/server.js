const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user')

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const uri = process.env.MONGO_URL;

mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open",()=>{
    console.log('cool!!!')
});

app.listen(3000,()=>{
    console.log('OK!!!')
});

//! REQUEST SYNTAXE

app.post('/add' , async (req,res)=>{
    try {
     data = req.body;
     userModel = new User(data);
     finalUser = await userModel.save();
     res.send(finalUser);
 
    } catch (error) {
     res.send(error)
    }
 })
 
 
 app.get('/get' , async (req,res)=>{
 try {
     allUsers = await User.find();
     res.send(allUsers)
     console.log(allUsers)
 } catch (error) {
     res.send(error)
 }
 })
 
 
 // ! GET BY ID
 
 app.get('/users/:id', async(req,res) => {
     try {
         myID = req.params.id;
         user = await User.findOne({ _id : myID});
         res.send(user)
     } catch (error) {
         res.send(error)
 
     }
 })
 
 // ! DELETE 
 
 app.delete('/delete/:id', async(req,res)=>{
     
     try {
         myID = req.params.id;
         user = await User.findOneAndDelete({_id : myID});
         res.send("user deleted ");
         console.log(user)
 
     } catch (error) {
         res.send(error)
     }
 
 })
 
 // ! UPDATE USER 
 
 app.put('/update/:id', async (req,res) => {
     try {
         myID = req.params.id;
       newData = req.body ;
       updateUser = await User.findByIdAndUpdate({_id : myID}, newData)
         res.send(updateUser)
     } catch (error) {
         res.send(error)
     }
 })