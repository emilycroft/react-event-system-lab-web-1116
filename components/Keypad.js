import React from 'react'

class Keypad extends React.Component {
  constructor() {
    super()
    this.state = {query: ''}
  }

  handleChange() {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
        <input type="password" value={this.state.query} onKeyUp={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

module.exports = Keypad
