import React from "react";
import { useState } from "react";

const Todo = ({ todo, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(todo.title);

    const handleSubmit = (e) => {
      e.preventDefault();
      onUpdate(todo.id, newValue);
      setIsEdit(!isEdit);
    };
    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button
          className="button buttonSave"
        >Guardar</button>
      </form>
    );
  };

  const TodoElement = () => {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{todo.title}</span>
        <h5>{todo.completed ? "Completa" : "Incompleta"}</h5>
        <button
          className="button buttonUpdate"
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          Editar
        </button>
        <button
          className="button buttonDelete"
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          Eliminar
        </button>
      </div>
    );
  };

  return <div className={todo.completed? "todo todoComplete":"todo"}>{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};

export default Todo;
