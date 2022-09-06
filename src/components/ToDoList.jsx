import React, { useState, useEffect } from 'react'
import './ToDoList.css'
import AddNewToDo from './AddNewToDo';
import DataList from './DataList';
import ToDoFooter from './ToDoFooter';

function ToDoList() {
  const [items, setItems] = useState([]);
  const setToDoItems = (data) => {
    setItems(prevState => {
      return [...prevState, data];
    });
  }
  const localStorageItems = (set) => {
    localStorage.setItem('data', JSON.stringify(set));

  }
  const deleteItem = (id) => {
    setItems(items.filter(data => data.id !== id));
    if (items.length === 1) {
      localStorageItems([]);
    }
  }
  const clearAllItems = () => {
    setItems([]);
    localStorageItems([])
  }

  useEffect(() => {
    if (!(items.length === 0)) {
      localStorageItems(items)
    }
  }, [items]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));

    if (data) {
      setItems(data);
    }
  }, []);

  return (
    <div className='todo-container'>
      <h2>Todo App</h2>
      <AddNewToDo setToDoItems={setToDoItems} />
      <DataList items={items} deleteItem={deleteItem} />
      <ToDoFooter length={items.length} clearAll={clearAllItems} />
    </div>
  )
}
export default ToDoList;