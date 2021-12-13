import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Overview from './Overview';

class TaskManager extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: {
        id: uuidv4(),
        text: '',
        display: true
      },
      tasks: [],
    }

    this.modifyText = this.modifyText.bind(this)
    this.switchDisplayMode = this.switchDisplayMode.bind(this)
  }

  // Sets the current task in state to whatever is typed in input field
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        display: true
      }
    })
  }

  // Adds current task in input field when submit button is clicked
  onSubmitTask = (e) => {
    e.preventDefault()
    if (e.target.querySelector('input').value === '') return
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        id: uuidv4(),
        text: '',
        display: true
      },
    })
  }

  // Delete specific Task
  deleteTask = (e) => {
    const id = e.target.parentNode.id
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        return id !== task.id
      })
    })
  }

  // Modify text for a specific Task
  modifyText = (e) => {
    const id = e.target.parentNode.id
    const input = e.target.parentNode.querySelector('input')
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id && input.value.length !== '') {
          task.text = input.value
          task.display = true
        }
        return task
      })
    })
  }

  // Reverse Display boolean for a specific Task
  switchDisplayMode = (e) => {
    const id = e.target.parentNode.id
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          task.display = !task.display
        }
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
        <Overview 
          tasks={tasks}
          modifyText={this.modifyText}
          switchDisplayMode={this.switchDisplayMode}
          deleteTask={this.deleteTask}
        />
      </div>
    )
  }
  
}

export default TaskManager
