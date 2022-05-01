const { User } = require('../models')
const bcrypt = require("bcrypt")

let session;

const login = async (req, res) => {
	const page = {
		title: "Login"
	}
	res.render('login', {
		page: page
	})
};

const loginUser = async (req, res) => {
	try {
		const getUser = await User.findOne({ 'mail': req.body.mail }).lean()
		const password = req.body.password
		console.log(getUser)

		if (getUser) {
			const matchPassword = await bcrypt.compare(password, getUser.password)
			console.log(getUser.password === password)
			if (matchPassword) {
				getUser.password === password;
				session = req.session;
				// session.authUser = getUser;
				console.log(session);
				res.redirect('/profiel')
				console.log('succesvol ingelogd')
			} else {
				//return 'invalid password'
				console.log('invalid password')
			}
		} else {
			// return 'user was not found'
			console.log('gebruiker niet gevonden')
		}

	} catch (error) {
		console.log(error)
		res.redirect('/error')
	}
}

const profile = async (req, res) => {
	const page = {
		title: "Profile"
	}
	res.render('profile', {
		page: page
	})
};

const register = async (req, res) => {
	const page = {
		title: "Register"
	}
	res.render('register', {
		page: page
	})
};

const registerUser = async (req, res) => {
	const name = req.body.name
	const mail = req.body.mail
	const password = req.body.password
	const hashedPassword = await bcrypt.hash(password, 10)

	try {
		const newUser = await User.create({
			name: name,
			mail: mail,
			password: hashedPassword
		});
		return newUser,
		res.redirect('/login')
	} catch (error) {
		console.log(error);
		console.log('Niet gelukt om een account aan te maken, probeer het nog eens')
		res.redirect('/register')
	}
}

module.exports = {
	login: login,
	loginUser: loginUser,
	profile: profile,
	register: register,
	registerUser: registerUser
};