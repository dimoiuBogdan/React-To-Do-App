import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {props.todos.map((todo) => (
            <Todo
              key={todo.id}
              setTodos={props.setTodos}
              todos={props.todos}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
