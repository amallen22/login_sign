const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
// const cookieSession = require('cookie-session')
var fs = require('fs')

const app = express()
const PORT = 3022

console.log('Its works!!')
app.use(session({
  // añadir la palabra secreta y name por seguridad
  name: 'ourCookieNameProject',
  secret: 'asdfgagaerebtyjry'
}))

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const pathPublic = path.join(__dirname, 'public')
app.use(express.static(pathPublic))

app.get('/', (req, res) => {
  if (req.session.logged) {
    res.redirect('/home')
  }
  res.render('pages/index')
})

app.post('/login', (req, res) => {
  let userMail = req.body.mail
  let userPass = req.body.pass

  fs.readFile('data/users_txt.txt', 'utf-8', (err, data) => {
    if (err) throw err
    const userData = data.split('\r\n')

    let matchLogin = userData.some(function (match) {
      let [mail, password] = match.split(':')
      return userMail === mail && userPass === password
    })

    if (matchLogin) {
      req.session.logged = true
      res.redirect('/home')
    } else {
      res.redirect('/sign-up')
    }
  })
})
app.post('/sign-up', (req, res) => {
  let userMail = req.body.mail
  let userPass = req.body.pass

  console.log(userPass)
  console.log(userMail)

  fs.appendFile('data/users_txt.txt', '\n' + userMail + ':' + userPass, (err) => {
    if (err) throw err
    res.redirect('/home')

  //   console.log('data')
    // const userData = data.split('\r\n')

    // let matchLogin = userData.some(function (match) {
    //   let [mail, password] = match.split(':')
    //   return userMail === mail && userPass === password
    // })

    // if (matchLogin) {
    //   req.session.logged = true
    //   res.redirect('/home')
    // } else {
    //   res.redirect('/sign-up')
    // }
  })
})
app.use('/home', (req, res) => {
  req.session.logged === undefined ? res.redirect('/') : res.render('pages/home')
  console.log(req.session.logged + ' cookie')
})
app.use('/sign-up', (req, res) => {
  res.render('pages/sign-up')
  console.log(req.session.logged + ' cookie')
})
app.get('/logout', (req, res) => {
  req.session.logged = undefined
  res.redirect('/')
  console.log(req.session.logged + ' cookie')
})

app.listen(PORT)

// npm install devtool --g

// arrancar devtool
// devtool app.js --watch
