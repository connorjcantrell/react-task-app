import React from 'react'

const Overview = (props) => {
  const { tasks } = props
  return (
    <ul>
      {tasks.map((task) => {
        return (
        <li key={task.id}>{task.number}: {task.text}
        <button onClick={props.deleteTask} id={task.id}>Delete</button></li>
        )
      })}
    </ul>
  )
}

export default Overview