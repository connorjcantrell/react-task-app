import React, { Component } from 'react'
import Overview from './components/Overview';
import {v4 as uuidv4 } from 'uuid'

class App extends Component {
  constructor() {
    super()

    this.deleteTask = this.deleteTask.bind(this)

    this.state = {
      task: {
        text: '',
        id: uuidv4(),
        number: undefined
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
        number: this.state.tasks.length + 1
      }
    })
  }

  // Adds current task in input field when submit button is clicked
  onSubmitTask = (e) => {
    // Won't refresh the form when submitted
    e.preventDefault()
    // Prevent empty input
    if (e.target.querySelector('input').value === '') return
    this.setState({
      // concat() doens't change the existing array, but instead returns a new array
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uuidv4(),
        number: this.state.tasks.length + 1
      },
    })
  }

  deleteTask = (e) => {
    const id = e.target.id
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    }, () => this.updateDisplayNumbers())
  }

  updateDisplayNumbers() {
    let index = 1
    this.setState({
      tasks: this.state.tasks.map(task => {
        task.number = index
        index++
        return task
      })
    })
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
        <Overview deleteTask={this.deleteTask} tasks={tasks} />
      </div>
    )
  }
}

export default App