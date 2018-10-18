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
      <div className="form-container">
        <span>Kans op uithuis plaatsing: <span className="total-value">{Math.floor(this.state.inputValue * 10)}%</span></span>
        <div>
          {/* The calculations aren't based on any real values.*/}
        </div>
        <span className="target-selector">{data.props.target}</span>
        <ul>
          {data.props.questions.map(obj => (
            <li key={obj.id} className="question-container">
              <span><strong>{obj.content}</strong></span>
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
