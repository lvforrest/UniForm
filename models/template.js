const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  templateName: { type: String, required: true, unique: true},
  // templateCreator: { type: String, required: true },
  template: Schema.Types.Mixed
});

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;
