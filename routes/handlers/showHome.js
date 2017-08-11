function showHome (req, res) {
  if (req.session.userLogged) {
    res.render('pages/home', { userLogged: req.session.userLogged })
  } else {
    res.redirect('/login')
  }
}

module.exports = showHome
