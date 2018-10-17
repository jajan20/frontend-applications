import React, { Component } from "react"

class FormView extends Component {

  calcValue(event) {
    // console.log(this)
    const answer = {
      value: this.answer.value
    }
    console.log(answer)
  }



    render() {
    // let calc = function() {
    //     let answerValue = document.querySelectorAll('input:checked')
    //     for(let i = 0; i < answerValue.length; i++) {
    //         console.log(answerValue[i].value, i)
    //     }
    // }

    const data = this.props
    return (
      <div addAnswer={this.props.addAnswer}>
          <div>
              <h1>Risico Percentage: {this.answerValue}</h1>
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
                      ref={(input) => this.answer = input}
                      onChange={(e) => this.calcValue(e)}
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
