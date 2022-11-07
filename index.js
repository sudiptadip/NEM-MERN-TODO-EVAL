const express = require('express')
const { connection } = require('./config/db')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 6000


app.get('/',(req,res)=>{
    res.send({msg: 'Home page'})
})







app.listen(PORT,async()=>{
    try{
        await connection
        console.log('connected to mongodb atlas')
    }catch(er){
        console.log(er)
    }
    console.log('listen on',PORT)
})