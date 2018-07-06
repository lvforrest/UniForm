const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 
 
const patronSchema = new Schema({ 
  patronName: { type: String, required: true, unique: true }, 
  patronData: Schema.Types.Mixed,
}); 
 
const Patron = mongoose.model("Patron", patronSchema); 
 
module.exports = Patron;