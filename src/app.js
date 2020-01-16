const path = require('path')
const express = require('express')
const hbs = require('hbs')
const menuRouter = require('./routers/router.js')

const app = express()
const port = process.env.PORT || 3000

// express hbs config
app.set('view engine','hbs')
app.set('views',path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

// static directory path
app.use(express.static(path.join(__dirname, '../public')))

// routers
app.use(menuRouter)


// sin o existe la ruta
app.get('*' , (req,res) => {
    res.render('404',{title: 'Uppss!'})
})

app.listen(port, () => {
    console.log('Server running on port:'+port)
})