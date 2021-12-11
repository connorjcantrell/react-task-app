import React, { Component } from 'react';
import {v4 as uuidv4 } from 'uuid'

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id : uuidv4(),
      text: '',
      edit: false
    }
  }

  displayText() {
    return (
      <div key={this.id}>
        {this.text}
      </div>
    )
  }

  editText() {
    return (
      <div key={this.id}>
        <input id={this.id}></input>
      </div>
    )
  }

  render() {
    if (this.state.edit) return this.editText()
    return this.displayText()
  }
}

export default Task