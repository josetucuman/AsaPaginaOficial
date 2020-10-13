const express = require('express')

module.exports  = app =>{
    //Setear
    app.set('port', process.env.PORT || 4000)

    return app
}