import React from "react";
import "./TodoSearch.css"


function TodoSearch () {

    const onSearch = (event) => {
        console.log(event.target.value)
    }

    return (
        <input onChange={onSearch} type="text" className="todoSearch-input" placeholder="Qué estás buscando?"/>
    )
}

export default TodoSearch;