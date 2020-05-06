import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CardContact = ({ contact }) => {
  const history=useHistory()
  const deleteContact = () => {
    axios
      .delete(`/deleteContact/${contact._id}`)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error.resp));
  };

  return (
    <div className="list-contact">
      <div className="list-item">
        <h5>Name: {contact.name}</h5>
        <h5>Phone: {contact.phone}</h5>
        <h5>Email: {contact.email}</h5>
      </div>
      <div style={{ display: "flex" }}>
      <button
          onClick={() => history.push(`/edit_contact/${contact._id}`)}
          type="button"
          className="btn btn-warning btn-sm"
        >
          Edit
        </button>
        <button
          onClick={() => deleteContact()}
          type="button"
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default CardContact;
