import React from 'react'

const DisplayTask = ({id, text}) => {
  return (
    <p id={id}>{text}</p>
  )
}

export default DisplayTask