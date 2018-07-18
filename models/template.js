const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  user: { type: String, required: true},
  userTemplateName: { type: String, required: true, unique: true},
  templateName: { type: String, required: true },
  template: Schema.Types.Mixed
});

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;
