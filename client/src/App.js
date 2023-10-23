import React, { useState, useEffect } from "react";
import List from "./components/List";
import axios from "axios";
import { baseURL } from "./utils/constant";
import "./index.css";
import CrudOperation from "./components/CrudOperation";

function App() {
  const [inputData, setInputData] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/show`).then((res) => {
      setTasks(res.data);
    });
  }, [updateUI]);

  const addTask = () => {
    axios.post(`${baseURL}/add`, { task: inputData }).then((res) => {
      setInputData("");
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateMode = (id, text) => {
    setInputData(text);
    setUpdateId(id);
  };

  const updateTask = () => {
    axios
      .put(`${baseURL}/update/${updateId}`, { task: inputData })
      .then((res) => {
        setUpdateUI((prevState) => !prevState);
        setUpdateId(null);
        setInputData("");
      });
  };

  return (
    <>
      <div className="container">
        <h1 className="title">CRUD Operations</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            style={{ border: "2px solid #0C090A" }}
          />
          <button
            type="submit"
            onClick={updateId ? updateTask : addTask}
            style={{ border: "2px solid #0C090A" }}
          >
            {updateId ? "Update task" : "Add task"}
          </button>
        </div>
        <ul className="todo-list">
          {tasks.map((task) => (
            <List
              key={task._id}
              id={task._id}
              task={task.task}
              setUpdateUI={setUpdateUI}
              updateMode={updateMode}
            />
          ))}
        </ul>
      </div>

      {/* simple crud operation */}
      {/* <CrudOperation/> */}
      
    </>
  );
}

export default App;
