const express = require('express')
const router = express.Router()

const handleRoot = require('./handlers/handleRoot')
const showLogin = require('./handlers/showLogin')
const showHome = require('./handlers/showHome')
const showSignup = require('./handlers/showSignup')
const userLogout = require('./handlers/userLogout')

const userLogin = require('./handlers/userLogin')
const userRegister = require('./handlers/userRegister')

router.get('/', handleRoot)
router.get('/login', showLogin)
router.get('/home', showHome)
router.get('/sign-up', showSignup)
router.get('/logout', userLogout)

router.post('/login', userLogin)
router.post('/sign-up', userRegister)

module.exports = router
