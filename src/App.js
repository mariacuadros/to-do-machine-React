import './App.css';
import React from 'react';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import CreateTodoButton from './CreateTodoButton';


const todoList = [
  {text: "Comprar alcohol", completed: true, id:1 },
  {text: "Comprar Matera", completed: false, id:2 },
  {text: "Comprar Shampoo", completed: true, id:3 },
  {text: "Comprar AGUA", completed: false, id:4 },
];

function App() {

  let totalTasks = todoList.length;
  let completedTask = todoList.filter(todo => todo.completed === true).length;

  return (
    <div className='app-container'>
      <TodoCounter completedTasks={completedTask}  totalTasks={totalTasks}/>
      <TodoSearch></TodoSearch>
      <TodoList todoList= {todoList} />
      <CreateTodoButton/>
    </div>
  ); 
}

export default App;
