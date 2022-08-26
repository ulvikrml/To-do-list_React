import React, {useState} from 'react'
import './ToDoList.css'
import AddNewToDo from './AddNewToDo';
import DataList from './DataList';
import ToDoFooter from './ToDoFooter';

function ToDoList() {
  const [items, setItems] = useState([]);
  const setToDoItems = (data) =>{
    setItems(prevState => {
      return [...prevState, data];
    });
  }
  const deleteItem = (id) =>{
    setItems(items.filter(data => data.id !== id));
  }
  const clearAllItems = () =>{
    setItems([]);
  }
  
  return (
    <div className='todo-container'>
        <h2>Todo App</h2>
        <AddNewToDo setToDoItems={setToDoItems}/>
        <DataList items={items} deleteItem={deleteItem}/>
        <ToDoFooter length={items.length} clearAll={clearAllItems}/>
    </div>
  )
}
export default ToDoList;