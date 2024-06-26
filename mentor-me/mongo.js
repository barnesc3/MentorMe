const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const UserModel = require('./UserModel')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/users");

app.post('/register', (req, res)=> {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running")
})