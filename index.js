require('dotenv').config()
const config =require('./src/public/routes/controllers/server/config')


const express = require('express')

config(express())

