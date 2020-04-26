import React from "react";
import "./styles.css";
import TodoListContainer from "./Containers/TodolistContainers";
import AddTodoContainer from "./Containers/AddTodoContainers";

const App = () => {
  return (
    <div className="App">
      <h1>Todo List!</h1>
      <AddTodoContainer />
      <TodoListContainer />
    </div>
  );
};

export default App;
