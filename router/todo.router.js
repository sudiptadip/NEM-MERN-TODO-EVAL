const {Router} = require('express')
const { autentication } = require('../Middleware/authentication.middleware')
const { Todo } = require('../module/todo.module')



const TodoRoter = Router()

TodoRoter.get('/',autentication, async (req,res)=>{ 
  let data = await Todo.find()
    res.send(data) 
})

TodoRoter.post('/create', autentication, async (req,res)=>{ 
    const {taskname,status,tag} = req.body
    const userId = req.body.userId
    console.log(req.body)
    try{
    let data = await Todo.insertMany(req.body)
    res.send(data)
    }catch(e){
        res.send({msg: "something rong"})
    }    
})

TodoRoter.patch("/edit/:id",(req,res)=>{
    const {id} = req.params
    
})


module.exports = {TodoRoter}