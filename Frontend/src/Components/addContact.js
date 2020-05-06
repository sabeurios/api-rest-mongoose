import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  const history = useHistory();
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const submitForm = (event) => {
    axios
      .post("/add_contact", newContact)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error.resp));
    setNewContact({ name: "", phone: "", email: "" });
    history.push("/contacts");
  };

  return (
    <form style={{ marginTop: "15vh" }}>
      <h2>Add New Contact</h2>
      <div className="form-group">
        <label htmlFor="input-name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter Name..."
          value={newContact.name}
          onChange={(event) =>
            setNewContact({ ...newContact, name: event.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="input-phone">Phone</label>
        <input
          type="number"
          className="form-control"
          id="telephone"
          placeholder="Enter phone number..."
          value={newContact.phone}
          onChange={(event) =>
            setNewContact({ ...newContact, phone: event.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="input-mail">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email..."
          value={newContact.email}
          onChange={(event) =>
            setNewContact({ ...newContact, email: event.target.value })
          }
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => {
          submitForm(e);
        }}
      >
        Add Contact
      </button>
    </form>
  );
};

export default AddContact;
