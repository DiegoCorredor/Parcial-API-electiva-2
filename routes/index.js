const routes = require('express').Router()

const path = require('path')

routes.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'))
})

routes.get('/:id',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/details.html'))
})




module.exports = routes