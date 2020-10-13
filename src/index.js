require('dotenv').config()
const config =require('./server/config')


const express = require('express')

const app =config(express())
app.listen(app.get('port'), ()=>console.log(`Servidor corriendo en el puerto ${app.get('port')} OK!!!`))

