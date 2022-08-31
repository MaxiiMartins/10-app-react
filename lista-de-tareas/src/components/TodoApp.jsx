import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoApp.css"

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };
    setTodos([newTodo, ...todos]);
    setTitle("");
  };

  //Funcion para actualizar elementos de la lista 
  const handleUpdate = (id,value)=>{
    const temp = [...todos]
    const item = temp.find(element=>element.id === id)
    item.title = value
    setTodos(temp)
  }
  //Funcion para eliminar elementos de la lista 
const handleDelete = (id)=>{
  const temp = todos.filter(element=>element.id !== id)
    setTodos(temp)
}

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="todoInput"
          type="text"
          value={title}
        />
        <button type="submit" className="button buttonCreate">
          Create todo
        </button>
        <br />
      </form>
      <div className="todosContainer">
        {todos.map(element =><Todo key={element.id} todo={element} onUpdate={handleUpdate} onDelete={handleDelete} />)}
      </div>
    </div>
  );
};

export default TodoApp;
