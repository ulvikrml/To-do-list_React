import React from 'react'
import './ToDoFooter.css'

const ToDoFooter = (props) => {
  return (
    <div className='todo-footer'>
        <p className='left-tasks'>You have {props.length} pending tasks</p>
        <button className="btn clear-btn" onClick={props.clearAll}>Clear All</button>
    </div>
  )
}

export default ToDoFooter