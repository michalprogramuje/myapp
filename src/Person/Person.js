import React from 'react'

const person = (props) => {
  return (
    <div>
      <p>To jest {props.name} i ma {props.age} lat</p>
      <p>{props.children}</p>
    </div>
)
}
export default person;
