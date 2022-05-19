const { User } = require('../models');
const bcrypt = require('bcrypt');

let session;
const nodemailer = require('nodemailer');

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
			if (matchPassword) {
				getUser.password === password;
				session = req.session
				session.authUser = getUser;
				res.redirect('/restaurants')
				console.log('Login succesful')
				console.log(session)
			} else {
				console.log('Invalid password')
			}
		} else {
			console.log('User not found.')
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
	const first_name = req.body.first_name
	const last_name = req.body.last_name
	const mail = req.body.mail
	const password = req.body.password
	const hashedPassword = await bcrypt.hash(password, 10)

	try {
		const newUser = await User.create({
			first_name: first_name,
			last_name: last_name,
			mail: mail,
			password: hashedPassword
		});

		let transporter = nodemailer.createTransport({
			service: 'hotmail',
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		})

		const mailOptions = {
			from: '"SecretMenu" <mitchel.staal@outlook.com>',
			to: newUser.mail,
			subject: 'Welcome to SecretMenu!',
			text: 'Hello ' + newUser.first_name + ', your account has been made. Try looking at some vegan places by going here: secret-menu.nl' + ' Thank your for signin up! Enjoy.',
		}

		transporter.sendMail(mailOptions, function (err, info) {
			if (err) {
			  console.log(err)
			} else {
			  console.log('verificatie email is naar je ingevulde email adres gestuurd')
			}
		})

		res.redirect('/login')
	} catch (error) {
		console.log('Failed to create account, try again.')
		console.log(error)
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