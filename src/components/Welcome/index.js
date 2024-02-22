import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {result: false}

  button = () => {
    this.setState(p => ({
      result: !p.result,
    }))
  }

  textchange = () => {
    const {result} = this.state

    return result ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.textchange()
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.button}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
