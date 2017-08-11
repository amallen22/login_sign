function userLogout (req, res) {
  req.session.userLogged = null
  res.redirect('/')
}

module.exports = userLogout
