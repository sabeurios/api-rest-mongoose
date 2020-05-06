import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UpdateContact = (props) => {
  const history = useHistory();
  const [updatedContact, setUpdatedContact] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const contactID = props.match.params.id

  useEffect(() => {
    const getContact = async () => {
      const response = await axios
        .get(`/contacts/${contactID}`)
         setUpdatedContact(response.data)
    };
    getContact();
  }, [contactID]);

  const updateContact = () => {
    axios.put(
      `/updateContact/${contactID}`,
      {name:updatedContact.name,phone:updatedContact.phone,email:updatedContact.email}
    );
    history.push("/contacts");
  };

  return (
    <form style={{ marginTop: "15vh" }}>
      <h2>Update Contact with ID:</h2>
      <h4>{contactID}</h4>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={updatedContact.name}
          onChange={(e) =>
            setUpdatedContact({
              ...updatedContact,
              name: e.target.value,
            })
          }
        />

        <div className="form-group">
          <label>Phone</label>
          <input
            type="number"
            className="form-control"
            id="telephone"
            value={updatedContact.phone}
            onChange={(e) =>
              setUpdatedContact({
                ...updatedContact,
                phone: e.target.value,
              })
            }
          />

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={updatedContact.email}
              onChange={(e) =>
                setUpdatedContact({
                  ...updatedContact,
                  email: e.target.value,
                })
              }
            />

            <div>
              <button
                type="button"
                className="btn btn-secondary btn-vidation"
                onClick={() => history.push("/contacts")}
              >
                Close
              </button>
              <button
                onClick={() => updateContact()}
                type="button"
                className="btn btn-primary btn-vidation"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default UpdateContact;
