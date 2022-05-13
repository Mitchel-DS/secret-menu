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
				res.redirect('/profile')
				console.log('Login succesful')
			} else {
				//return 'invalid password'
				console.log('Invalid password')
			}
		} else {
			// return 'user was not found'
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
		session = req.session
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
			text: 'Hello ' + newUser.name + ', your account has been made.',
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