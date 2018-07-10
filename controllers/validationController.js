// const db = require ("../models");
// const bcrypt =require ("bcrypt");

// module.exports = {
//     createUser:function(newUser, callback){
//         bcrypt.genSalt(10, function(err, salt) {
//             bcrypt.hash(newUser.password, salt, function(err, hash) {
//                 newUser.password = hash;
//                 newUser.save(callback);
//             });
//         });
//     },
    
//    getByUsername:function(username, callback){
//         const username = {username: username};
//         User.findOne(username, callback);
//     },
    
//    getById: function(id, callback){
//         User.findById(id, callback);
//     },
    
//    comparePassword: function(password, hash, callback){
//         bcrypt.compare(password, hash, function(err, match) {
//             if(err) throw err;
//             callback(null, match);
//         });
//     }
    
    
//   };

