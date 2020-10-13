require('dotenv').config()
const config =require('./server/config')


const express = require('express')

config(express())

