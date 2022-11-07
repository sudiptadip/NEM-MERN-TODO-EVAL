const express = require('express')
const { connection } = require('./config/db')
const { loginRouter } = require('./router/login.router')
const { signupRouter } = require('./router/signup.router')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 6000
app.use(express.json())

app.get('/',(req,res)=>{
    res.send({msg: 'Home page'})
})

app.use('/signup',signupRouter)

app.use('/login',loginRouter)


app.listen(PORT,async()=>{
    try{
        await connection
        console.log('connected to mongodb atlas')
    }catch(er){
        console.log(er)
    }
    console.log('listen on',PORT)
})