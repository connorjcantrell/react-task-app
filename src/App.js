import React, { Component } from 'react'
import Overview from './components/Overview';
import {v4 as uuidv4 } from 'uuid'

class App extends Component {
  constructor() {
    super()

    this.completeTask = this.completeTask.bind(this)

    this.state = {
      task: {
        text: '',
        id: uuidv4(),
        number: 1
      },
      tasks: [],
    }
  }

  // Sets the current task in state to whatever is typed in input field
  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
        number: this.state.task.number + 1
      }
    })
  }

  // Adds current task in input field when submit button is clicked
  onSubmitTask = (e) => {
    // Won't refresh the form when submitted
    e.preventDefault()
    this.setState({
      // concat() doens't change the existing array, but instead returns a new array
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uuidv4(),
        number: this.state.task.number + 1
      },
    })
  }

  completeTask(id) {
    // TODO: Remove task from tasks array by id 
    console.log('Running completeTask()')
  }

  render() {
    const { task, tasks } = this.state

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
            <label htmlFor="taskInput">Enter task</label>
            <input
              onChange={this.handleChange}
              value={task.text}
              type="text"
              id="taskInput" />
            <button type="submit">Add Task</button>
        </form>
        <Overview completeTask={this.completeTask} tasks={tasks} />
      </div>
    )
  }
}

export default App