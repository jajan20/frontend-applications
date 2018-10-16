import React, { Component } from "react"

class FormView extends Component {
  render() {
    const data = this.props
    console.log(data.props)
    return (
      <div>
        <h1>{data.props.target}</h1>
        <ul>
          {data.props.questions.map(obj => (
            <li key={obj.id}>
              <h2>{obj.content}</h2>
              <ul className="q-container">
                {obj.answers.map(q => (
                  <li key={q.id} className="selections">
                    <input
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
