const express = require('express')
const menu = new express.Router()


menu.get('' , (req,res) => {
    res.render('index',{title: 'Home Sweet Home!'})
})


menu.get('/about' , (req,res) => {

    if(!req.query.key){
        return res.send({
            error: 'No has introducido ninguna key'
        })
    }
    console.log(req.query.key)
    res.render('about',{title: 'Routers... About Me and '+ req.query.key})
})

menu.get('/help' , (req,res) => {
    res.send({name: 'jose', age: 34})
})


module.exports = menu