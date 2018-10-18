//Import components into app
import React, { Component } from "react"
import "./App.css"
import FormView from "./form-view"
import Header from "./Header"
import data from "./data.json"

//Render formview
class App extends Component {
  render() {
    var number = 0
    return (
      <div>
        <Header/>
      <div className={"Form"}>
        {data.map(obj => (
          <FormView key={(number += 1)} props={obj} />
        ))}
      </div>
      </div>
    )
  }
}

export default App
