//Import components into app
import React, { Component } from "react"
import "./App.css"
import FormView from "./form-view"
import data from "./data.json"

//Render formview
class App extends Component {
  constructor() {
    //Can't call on this, without using super. Because the App needs to initialize first.
    super()
    this.addAnswer = this.addAnswer.bind(this)
    // Initial state
    this.state = {
      something: {}
    }
  }
  
  addAnswer(answer) {
    const something = {...this.state.something}
    const timestamp = Date.now()
    something[`test-${timestamp}`] = answer
    this.setState({something: something})
  } 


  render() {
    var number = 0
    return (
      <div className={"Form"}>
        {data.map(obj => (
          <FormView addAnswer={this.addAnswer} key={(number += 1)} props={obj} />
        ))}
      </div>
    )
  }
}

export default App
