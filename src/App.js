import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStauts] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Get Saved todos from local storage only once, when the component renders
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Display todos based on filter and save to local storage everytime the filterStatus or the todos change.
  useEffect(() => {
    filterHandler();
    saveToLocalStorage();
  }, [filterStatus, todos]);

  const filterHandler = () => {
    switch (filterStatus) {
      default:
        setFilteredTodos(todos);
        break;
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null)
      localStorage.setItem("todos", JSON.stringify([]));
    else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Bobita's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setFilterStatus={setFilterStauts}
      />
      <TodoList
        filterStatus={filterStatus}
        setTodos={setTodos}
        todos={filteredTodos}
      />
    </div>
  );
}

export default App;
