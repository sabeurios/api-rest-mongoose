import React, { useState, useEffect } from "react";
import axios from "axios";
import CardContact from "./cardContact";

const ListContact = () => {
  const [usersDB, setUsersDB] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      await axios.get("/contacts").then((resp) => setUsersDB(resp.data));
    };
    getContacts();
  }, [usersDB]);

  return (
    <div>
      <div className="list-content">
        {usersDB.map((user, index) => (
          <CardContact key={user._id} contact={user} />
        ))}
      </div>
    </div>
  );
};

export default ListContact;
