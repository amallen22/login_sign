const fs = require('fs')
const path = require('path')

function userLogin (req, res) {
  let {mail: userMail, pass: userPass} = req.body

  const pathFileUsers = path.join(process.cwd(), 'data/users_txt.txt')
  fs.readFile(pathFileUsers, 'utf-8', (err, data) => {
    if (err) throw err
    const userData = data.split('\r\n')

    let matchLogin = userData.some(function (match) {
      let [mail, password] = match.split(':')
      return userMail === mail && userPass === password
    })

    if (matchLogin) {
      req.session.userLogged = userMail
      res.redirect('/home')
    } else {
      res.redirect('/sign-up')
    }
  })
}

module.exports = userLogin
