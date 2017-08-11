function userLogout (req, res) {
  req.session.logged = undefined
  res.redirect('/')
  console.log(req.session.logged + ' cookie')
}

module.exports = userLogout
