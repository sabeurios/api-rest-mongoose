import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="main">
      <div className="main-button">
        <button
          type="button"
          className="btn btn-light btn-list"
          onClick={() => history.push("/contacts")}
        >
          Contacts List
        </button>
        <button
          type="button"
          className="btn btn-warning btn-add"
          onClick={() => history.push("/add_contact")}
        >
          New Contact
        </button>
      </div>
    </div>
  );
};
export default Header;
