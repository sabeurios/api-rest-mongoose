const express = require("express");
const router = express.Router();

const Contact = require("../models/contact");

// Display all contact :
router.get("/contacts", (req, res) => {
  Contact.find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

// Display one contact :
router.get("/contacts/:id", (req, res) => {
  const { id } = req.params;
  Contact.findOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

// Add New contact :
router.post("/add_contact", (req, res) => {
  const { name, phone, email } = req.body;
  const newContact = new Contact({
    name,
    email,
    phone,
  });
  newContact
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

// delete a contact :
router.delete("/deleteContact/:id", (req, res) => {
  const { id } = req.params;
  Contact.findByIdAndDelete({ _id: id }).then(() =>
    res.json({ msg: "The contact was deleted!" }).catch((err) => res.send(err))
  );
});

// update a contact :
router.put("/updateContact/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  Contact.findByIdAndUpdate({ _id: id }, { $set: { name, email, phone } })
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

module.exports = router;
