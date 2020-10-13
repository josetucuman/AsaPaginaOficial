 const { Router } = require('express')
const Home = require('../controllers/home')
const Testimonios = require('../controllers/testimonio')
 const rutas = Router()


 module.exports = app =>{
    rutas.get('/', Home.index)
    rutas.get('/testimonios', Testimonios.index)
    rutas.get('/', Home.index)
    rutas.get('/', Home.index)
    app.use(rutas)
}