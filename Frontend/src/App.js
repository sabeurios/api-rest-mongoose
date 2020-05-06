import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import AddContact from "./Components/addContact";
import Header from "./Components/header";
import ListContact from "./Components/listContacts";
import UpdateContact from "./Components/updateContact";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header />
            <Route exact path="/contacts" component={ListContact} />
            <Route exact path="/add_contact" component={AddContact} />
            <Route exact path="/edit_contact/:id" component={UpdateContact} />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
