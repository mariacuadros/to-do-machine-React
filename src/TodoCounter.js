import React from "react";
import "./TodoCounter.css"

function TodoCounter (props) {
    return (
        <h2 className="todoCounter">Has completado {props.completedTasks} de {props.totalTasks} ToDo's</h2>
    )
}

export default TodoCounter;