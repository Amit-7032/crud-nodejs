import React, { useState } from "react";
import "./crud.css";

function CrudOperation() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue) {
      if (editIndex !== -1) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputValue;
        setTodos(updatedTodos);
        setEditIndex(-1);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    if (editIndex === index) {
      setEditIndex(-1);
      setInputValue("");
    }
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setInputValue(todos[index]);
  };

  return (
    <div className="container">
      <h1>CRUD Operation</h1>
      <div className="input-container">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>
          {editIndex !== -1 ? "Update" : "Add"}
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <div>{todo}</div>
            <div className="edit-del-btn">
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              <button onClick={() => handleEditTodo(index)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudOperation;
