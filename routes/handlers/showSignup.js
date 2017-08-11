function showSignup (req, res) {
  if (req.session.userLogged) {
    res.render('pages/home', { userLogged: req.session.userLogged })
  } else {
    res.render('pages/sign-up')
  }
}

module.exports = showSignup
