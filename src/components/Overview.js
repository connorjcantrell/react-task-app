import React from 'react'
import DisplayTask from './DisplayTask'
import EditTask from './EditTask'

const Overview = (props) => {
  let {tasks, modifyText, switchDisplayMode} = props
  return (
    <ul>
      {tasks.map((task, index) => {
        if (task.display) {
          return (
            <li key={task.id} id={task.id}>
              <p>{index + 1}: </p>
              <DisplayTask text={task.text}/>
              <button onClick={switchDisplayMode}>Edit</button>
            </li>
          )
        }
        return (
          <li key={task.id} id={task.id}>
            <p>{index + 1}: </p>
            <EditTask />
            <button onClick={modifyText}>Submit</button>
            <button onClick={switchDisplayMode}>Cancel</button>
          </li>
        )
      })}
    </ul>
  )
}


export default Overview