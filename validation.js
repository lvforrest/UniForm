
// const express = require('express');
// const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");



// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
	usernameField: "email",
	passwordField: "password",
	passReqToCallback:true
  },
  function(req,email, password, done) {
		console.log(email)
    // When a user tries to sign in this code runs
	User.findOne({email:email})
	.then(function(user) {
      // If there's no user with the given email
      if (!user) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!user.checkPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, user);
    });
  }
));

  passport.serializeUser(function(user, done) {
	done(null, user.id);
  });
  
  passport.deserializeUser(function(user,done) {
	User.findById(user.id, function(err,user){
		done(err, user);
	});
  });
  
module.exports = passport;
