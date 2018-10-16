//IMPORT COMPONENTS INTO APP
import React, { Component } from "react";
import "./App.css";
import FormView from "./form-view";
import data from "./data.json";

//RENDER MESSAGEVIEW TO APP
class App extends Component {
  render() {
    var number = 0;
    return (
      <div className={"Form"}>
        {data.map(obj => (
          <FormView key={(number += 1)} props={obj} />
        ))}
      </div>
    );
  }
}

export default App;
