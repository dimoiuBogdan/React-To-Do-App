import React from "react";

export default function Todo(props) {
  const deleteHandler = () => {
    props.setTodos(
      //  IMPORTANT!!! : returns every element besides the one we clicked
      props.todos.filter(
        (clickedElement) => clickedElement.id !== props.todo.id
      )
    );
  };

  const completeHandler = () => {
    props.setTodos(
      //  Maps the todos array
      props.todos.map((clickedElement) => {
        // Checks for the clicked todo in the array
        if (props.todo.id === clickedElement.id)
          //   Switches the completed value
          props.todo.completed = !props.todo.completed;
        //  Returns every todo element
        return clickedElement;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
        {props.todo.text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
