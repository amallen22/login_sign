const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const routesApp = require('./routes/')

const app = express()
const PORT = 3022

app.set('view engine', 'pug')

app.use(cookieSession({
  name: 'ourCookieNameProject',
  keys: ['asdfgagaerebtyjry']
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const pathPublic = path.join(__dirname, 'public')
app.use(express.static(pathPublic))

// at the end always
app.use(routesApp)

app.listen(PORT)
console.log(`We are listening from ${PORT} port`)

// npm install devtool --g

// arrancar devtool
// devtool app.js --watch
