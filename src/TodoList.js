import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"

function TodoList (props) {
    return (
        <ul className="todo-list">
          {props.todoList.map (todo => (
              <TodoItem key={todo.id} todo= {todo}/>
          ))}
        </ul>
    )
}

export default TodoList;