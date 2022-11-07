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

TodoRoter.patch("/edit/:id",autentication,async(req,res)=>{
    const {id} = req.params
    try{
        const editdata = await Todo.findOneAndUpdate({_id: id},req.body)
        res.send('update successfully')
    }catch(er){
        res.send('update faild')
    }
})

TodoRoter.delete("/delete/:id", autentication, async(req,res)=>{
    const {id} = req.params
    console.log(id)
    try{
        const editdata = await Todo.deleteOne({_id: id})
        res.send('delete successfully')
    }catch(er){
        res.send('delete faild')
    }
})

module.exports = {TodoRoter}