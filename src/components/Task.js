import React, { Component } from 'react';
import {v4 as uuidv4 } from 'uuid'

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id : uuidv4(),
      number: undefined,
      description: '',
      edit: false
    }
  }

  displayDescription() {
    return (
      <div key={this.id}>
        {this.description}
      </div>
    )
  }

  editDescription() {
    return (
      <div key={this.id}>
        <input id={this.id}></input>
      </div>
    )
  }

  render() {
    if (this.state.edit) return this.editTask()
    return this.displayTask()
  }
}

export default Task