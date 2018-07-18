const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 
 
const patronSchema = new Schema({ 
  user: {type: String, required: true},
  patronName: { type: String, required: true},
  userPatronName: { type: String, required: true, unique: true },
  patronData: Schema.Types.Mixed,
}); 
 
const Patron = mongoose.model("Patron", patronSchema); 
 
module.exports = Patron;