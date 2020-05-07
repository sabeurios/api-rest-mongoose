const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchemaContact = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  }
});

module.exports = Contact = mongoose.model("listcontact", SchemaContact);
