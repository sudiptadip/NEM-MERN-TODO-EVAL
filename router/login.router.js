 const {Router} = require('express')
 const bcrypt = require("bcrypt")
 const jwt = require('jsonwebtoken')
const { Signup } = require('../module/signup.module')
 require('dotenv').config()
 const loginRouter = Router()

const autentication = (req,res,next) => {
    if(!req.headers.token){
        return res.send({msg: "please login"})
    }
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, (err,decode) => {
        if(err){
            res.send({msg: "please login"})
        }else{
            req.body.userId = decode.userId
        }
    })
}


loginRouter.post('/',async(req,res)=>{
    const userData = req.body
    const {email,password} = req.body
    let data = await Signup.findOne({email: email})
    const userID = data._id
    if(data){
    const hash = data.password
    bcrypt.compare(password, hash, function(err, result) {
        if(result){
            var token = jwt.sign({userId: userID,}, process.env.SECRET_KEY);
            res.send({userData: userData, token: token})
        }else{
            res.send({msg: 'wrong password'})
        }
    });
}else{
    res.send({msg: 'check your email and password'})
}
})

module.exports = {loginRouter}