const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filledSchema = new Schema({
  TemplateName: { type: String, required: true },
  TemplateCreator: { type: String, required: true },
  userFilling: { type: String, required: true },
  filled: Schema.Types.Mixed
});

const Filled = mongoose.model("Filled", filledSchema);

module.exports = Filled;

