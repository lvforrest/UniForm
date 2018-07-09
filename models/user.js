const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema({
  firstName:{ type: String, required:true},
  lastName:{type: String, required:true},
  email: { type: String, required: true, unique: true},
  username:{type:String, required:true, unique:true},
  password:{type: String, required: true},
});

const User = mongoose.model("User", userSchema);

// User.methods = {
// 	checkPassword: function (inputPassword) {
// 		return bcrypt.compareSync(inputPassword, this.password)
// 	}
// };

// User.pre('save', function(next) {
//   this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
//   next();
// });

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}
module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var username = {username: username};
	User.findOne(username, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(password, hash, callback){
	bcrypt.compare(password, hash, function(err, match) {
    	if(err) throw err;
    	callback(null, match);
	});
}



module.exports = User;



