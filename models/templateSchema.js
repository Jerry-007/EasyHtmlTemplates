const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const templateSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Design: {
    type: String,
    required: true,
  },
});

const Template = mongoose.model("Template", templateSchema);
module.exports = Template;
