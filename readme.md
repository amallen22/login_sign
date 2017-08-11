1- página de bienvenida /home
2- pagina /login
3- checkear que tenemos acceso con los datos de login (req.body)
4- comprobar q los datos estan en el archivo (fs.readfile), sino me enviará a una pagina de /error
5- Si coincide escribimos el usuario q se ha logeado en la sesion
	- crear middleware con express.sessions (req.session)
6- la siguiente vez que entre en el login me redirija a la pagina de bienvenida
7- Desde /home hacer logout, borrar sesion y redirigir a login

-------
requiere:
	- body-parser
	- router
	- 