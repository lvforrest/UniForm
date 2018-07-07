const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName:{ type: String, required:true},
  lastName:{type: String, required:true},
  email: { type: String, required: true, unique: true},
  password:{type: String, required: true},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const passportLocalMongoose =require("passport-local-mongoose");
// const bcrypt = require("bcrypt-nodejs");

// const User = new Schema({
//   email: { type: String, required: true, unique: true},
//   password:{type: String, required: true},
// })

// User.methods = {
// 	checkPassword: function (inputPassword) {
// 		return bcrypt.compareSync(inputPassword, this.password)
// 	}
// };

// User.pre('save', function(next) {
//   this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
//   next();
// });
// User.plugin(passportLocalMongoose);

// module.exports= mongoose.model("User", User);