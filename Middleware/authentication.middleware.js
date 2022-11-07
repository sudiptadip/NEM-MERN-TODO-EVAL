const jwt = require('jsonwebtoken')
require('dotenv').config()



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
            next()
        }
    })
}


module.exports = {autentication}