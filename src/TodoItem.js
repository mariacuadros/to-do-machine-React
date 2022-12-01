import React from "react";
import "./TodoItem.css"

function TodoItem (props) {

    const onDoneTask = () => {
        alert (`Has completado la tarea ${props.todo.text}`)
    }
    const onDeleteTask = () => {
        alert (`Has eliminado la tarea ${props.todo.text}`)
    }


    return (
        <li className="todo-item">
            <span onClick={onDoneTask}>√</span>
            <p className={`todo-item__text ${props.todo.completed && 'todo-item__textlined'}`}>{props.todo.text}</p>
            <span onClick={onDeleteTask}>X</span>
        </li>
    )
}

export default TodoItem;