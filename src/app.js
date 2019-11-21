const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// express hbs config
app.set('view engine','hbs')
app.set('views',path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

// static directory path
app.use(express.static(path.join(__dirname, '../public')))

app.get('' , (req,res) => {
    res.render('index',{title: 'Home Sweet Home!'})
})


app.get('/about' , (req,res) => {

    if(!req.query.key){
        return res.send({
            error: 'No has introducido ninguna key'
        })
    }
    console.log(req.query.key)
    res.render('about',{title: 'About Me and '+ req.query.key})
})

app.get('/help' , (req,res) => {
    res.send({name: 'jose', age: 34})
})

// sin o existe la ruta
app.get('*' , (req,res) => {
    res.render('404',{title: 'Uppss!'})
})

app.listen(3000, () => {
    console.log('Server running on port:3000')
})