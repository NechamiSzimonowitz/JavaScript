import { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    sign: "",
    number1: 0,
    Buttonspressed: 0,
    number2: 0
  }
  render() {
    return (
      <>
        <button onClick={(e) => this.signClicked(e)} id="+">+</button>
        <button onClick={(e) => this.signClicked(e)} id="-">-</button>
        <button onClick={(e) => this.equals(e)} id="=">=</button>
        <button onClick={(e) => this.numberClicked(e)} id='1'>1</button>
        <button onClick={(e) => this.numberClicked(e)} id='2'>2</button>
        <button onClick={(e) => this.numberClicked(e)} id='3'>3</button>
        <button onClick={(e) => this.numberClicked(e)} id='4'>4</button>
        <button onClick={(e) => this.numberClicked(e)} id='5'>5</button>
        <button onClick={(e) => this.numberClicked(e)} id='6'>6</button>
        <button onClick={(e) => this.numberClicked(e)} id='7'>7</button>
        <button onClick={(e) => this.numberClicked(e)} id='8'>8</button>
        <button onClick={(e) => this.numberClicked(e)} id='9'>9</button>
        <div>The Answer: </div>
        <div id="theAnswer">{this.state.answer}</div>
      </>

    )

  }

  numberClicked(e) {
    const buttonID = e.target.id;
    console.log(buttonID)
    if (this.state.Buttonspressed === 0) {
      this.setState({
        Buttonspressed: 1,
        number1: buttonID,
      });
    }
    else {
      this.setState({
        Buttonspressed: 0,
        number2: buttonID
      });
    }
  }

  signClicked(e) {
    const signID = e.target.id;
    console.log(signID)
    this.setState({
      sign: signID
    })
  }

  equals() {
    const { sign, number1, number2 } = this.state;
    if (sign == "+") {
      const answer = parseInt(number1) + parseInt(number2);
      console.log(answer)
      this.setState({
        answer: answer
      })

    }
    else {
      const answer = parseInt(number1) - parseInt(number2);
      console.log(answer)
      this.setState({
        answer: answer
      })
    }

  }

}


export default App
