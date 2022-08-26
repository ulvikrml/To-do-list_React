import React, { useState } from 'react'
import './AddNewToDo.css'

function AddNewToDo(props) {
    const [toDoElement, setToDoElement] = useState('');

    const inputHandler = (e) => {
        setToDoElement(e.target.value)
    }

    const addElementHandler = (e) => {
        e.preventDefault();
        if(toDoElement.length === 0){
            return;
        }
        props.setToDoItems({info: toDoElement.trim(), id: Math.floor(Math.random()*10000)});
        setToDoElement('');

    }

    return (
        <form className='add-sec' onSubmit={addElementHandler}>
            <input type="text" className='add-input' value={toDoElement} onChange={inputHandler} placeholder='Add your new todo' />
            <button type="submit" className='btn add-btn'>+</button>
        </form>
    )
}

export default AddNewToDo;