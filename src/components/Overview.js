import React from 'react'
import DisplayTask from './DisplayTask'
import EditTask from './EditTask'

const Overview = (props) => {
  let {tasks, modifyText, switchEditMode, deleteTask} = props
  return (
    <ul>
      {tasks.map((task, index) => {
        if (!task.edit) {
          return (
            <li key={task.id} id={task.id}>
              <p>{index + 1}: </p>
              <DisplayTask text={task.text}/>
              <button onClick={switchEditMode}>Edit</button>
              <button onClick={deleteTask}>Delete</button>
            </li>
          )
        }
        return (
          <li key={task.id} id={task.id}>
            <p>{index + 1}: </p>
            <EditTask />
            <button onClick={modifyText}>Submit</button>
            <button onClick={switchEditMode}>Cancel</button>
          </li>
        )
      })}
    </ul>
  )
}


export default Overview