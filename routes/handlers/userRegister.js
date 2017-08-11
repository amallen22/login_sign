const fs = require('fs')
const path = require('path')

function userRegister (req, res) {
  let {mail: userMail, pass: userPass} = req.body

  const pathFileUsers = path.join(process.cwd(), 'data/users_txt.txt')
  fs.appendFile(pathFileUsers, '\r\n' + userMail + ':' + userPass, (err) => {
    if (err) throw err
    res.redirect('/home')
  })
}

module.exports = userRegister
