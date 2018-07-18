const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filledSchema = new Schema({
  user: { type: String, required: true },
  templateId: { type: String, required: true },
  patronId: { type: String, required: true }, 
  filledName: {type: String, required: true},
  userFilledName: {type: String, required: true, unique: true}
});

const Filled = mongoose.model("Filled", filledSchema);

module.exports = Filled;

