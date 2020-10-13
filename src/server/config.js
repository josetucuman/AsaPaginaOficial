const exphbs = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')

const errorHandler = require('errorhandler')

const express = require('express')

const rutas = require('../routes')
const { env } = require('process')


module.exports  = app =>{
    //Setear
    app.set('port', process.env.PORT || 4000)
    app.set('views', path.join(__dirname, 'views'))
    app.engine('.hbs',exphbs({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs',
        helpers: require('./helper')
    }))
    app.set('view engine', '.hbs')


    //middlewares
    app.use(morgan('dev'))
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())


    //Rutas
    rutas(app)


    //Archivos estaticos
    app.use('/public',express.static(path.join(__dirname,'../public')))


    //error handler
    if('development'===app.get(env)){
        app.use(errorHandler)
    }

    //views



    return app
}