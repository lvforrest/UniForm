const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filledSchema = new Schema({
  templateName: { type: String, required: true },
  patronName: { type: String, required: true }, 
  filledName: {type: String, required: true},
  filled: Schema.Types.Mixed
});

const Filled = mongoose.model("Filled", filledSchema);

module.exports = Filled;

