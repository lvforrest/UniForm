const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 
 
const questrianSchema = new Schema({ 
  email: { type: String, required: true, unique: true}, 
  firstName: { type: String, required: true }, 
}); 
 
const Questrian = mongoose.model("Questrian", questrianSchema); 
 
module.exports = Questrian;