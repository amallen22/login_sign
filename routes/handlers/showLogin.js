function showLogin (req, res) {
  if (req.session.userLogged) {
    res.redirect('/home')
  }
  res.render('pages/login')
}

module.exports = showLogin
