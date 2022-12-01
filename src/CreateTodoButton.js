import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton () {
const addTask = () => {
    alert("Agrega una nueva tarea :) ")
}

    return (
        <button onClick={addTask} className="todo-button">+</button>
    )
}

export default CreateTodoButton;