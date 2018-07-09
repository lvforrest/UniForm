
const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require("../models/user");

// const User = require('../models/user');

// Register
router.get('/Account', function (req, res) {
	res.render('Account');
});

// Login
router.get('/Login', function (req, res) {
	res.render('Login');
});

// Signup info
router.post('/Account', function (req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;
	

	// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();

	const errors = req.validationErrors();

	if (errors) {
		res.render('Account', {
			errors: errors
		});
	}
	else {
		//checking for email and username are already taken
		db.User.findOne({ username: { 
			"$regex": "^" + username + "\\b", "$options": "i"
	}}, function (err, user) {
			db.User.findOne({ email: { 
				"$regex": "^" + email + "\\b", "$options": "i"
		}}, function (err, mail) {
				if (user || mail) {
					res.render('login', {
						user: user,
						mail: mail
					});
				}
				else {
					const newUser = new User({
                        firstName: firstName,
                        lastName: lastName,
						email: email,
						username: username,
						password: password
					});
					User.createUser(newUser, function (err, user) {
						if (err) throw err;
						console.log(user);
					});
				} 
			});
		});
	}
});

passport.use(new LocalStrategy(
	function (username, password, done) {
		db.User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			db.User.comparePassword(password, user.password, function (err, match) {
				if (err) throw err;
				if (match) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }),
	function (req, res) {
		res.redirect('/');
	});

router.get('/logout', function (req, res) {
	req.logout();
});

module.exports = router;