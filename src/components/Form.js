import React from "react";

export default function Form(props) {
  const inputTextHandler = (e) => {
    // Changes the input text in the app.js component through the event that was transfered as a prop.
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    // ...props.todos represents the other todos in the array, and destructures them and then adds the new one to the whole todos array
    props.setTodos([
      ...props.todos,
      {
        text: props.inputText,
        completed: false,
        id: Math.trunc(Math.random() * 10000),
      },
    ]);
    props.setInputText("");
  };

  const changeStatus = (e) => {
    props.setFilterStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          value={props.inputText}
          type="text"
          className="todo-input"
          onChange={inputTextHandler}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onClick={changeStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}
