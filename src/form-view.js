import React, { Component } from "react"

class FormView extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      inputValue: ""
    }
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const data = this.props
    return (
      <div>
        <div>
          <h1>Risico Percentage: {Math.floor(this.state.inputValue * 10)}%</h1>
        </div>
        <h1>{data.props.target}</h1>
        <ul>
          {data.props.questions.map(obj => (
            <li key={obj.id} className="question-container">
              <h2>{obj.content}</h2>
              <ul className="answer-container">
                {obj.answers.map(q => (
                  <li key={q.id} className="selections">
                    <input
                      ref={input => (this.answer = input)}
                      onChange={this.handleChange}
                      name={obj.content}
                      id={q.id}
                      type={"radio"}
                      value={q.value}
                    />
                    <label htmlFor={q.id}>{q.content}</label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default FormView
