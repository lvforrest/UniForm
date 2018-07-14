const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName:{ type: String, required:true},
  lastName:{type: String, required:true},
  email: { type: String, required: true, unique: true},
  password:{type: String, required: true},
});


userSchema.method('checkPassword', function(inputPassword) {
  return bcrypt.compareSync(inputPassword, this.password);
});

userSchema.pre('save', function(next) {
	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
	next();
  });
  
const User = mongoose.model("User", userSchema);


module.exports = User;



