import React from 'react'

const person = (props) => {
  return (
    <div>
      <p>To jest {props.name} i ma {Math.floor(Math.random() * 30)} lat</p>
      <p>{props.children}</p>
    </div>
)
}
export default person;
