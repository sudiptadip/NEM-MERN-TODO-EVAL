 const {Router} = require('express')
 const bcrypt = require("bcrypt")
 const jwt = require('jsonwebtoken')
const { Signup } = require('../module/signup.module')
 require('dotenv').config()
 const loginRouter = Router()




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